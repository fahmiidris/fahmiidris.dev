export const fadeInAndUp = {
    initial: { y: 40, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
}

export const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const staggerFaster = {
    animate: {
        transition: {
            staggerChildren: 0.07,
        },
    },
}

export const line = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
    }
}

export const ul = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}

export const li = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
}
