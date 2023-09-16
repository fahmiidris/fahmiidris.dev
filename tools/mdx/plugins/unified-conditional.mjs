export default function unifiedConditional(...rules) {
    return (...args) => {
        const filename = args[1]?.history?.[0];

        if (!filename) {
            return;
        }

        if (!Array.isArray(rules[0])) {
            rules = [rules];
        }

        for (const rule of rules) {
            const [condition, pluginsIf, pluginsElse = []] = rule;

            const plugins =
                (typeof condition === 'string' && filename === condition) ||
                (condition instanceof RegExp && condition.test(filename)) ||
                (typeof condition === 'function' && condition(...args))
                    ? pluginsIf
                    : pluginsElse;

            for (let plugin of plugins) {
                let options = [];

                if (Array.isArray(plugin)) {
                    [plugin, ...options] = plugin;
                }

                plugin(...options)(...args);
            }
        }
    };
}
