import React, { type ReactNode } from 'react';
import { motion } from 'motion/react';

interface MotionWrapperProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    ref?: React.Ref<HTMLDialogElement>;
    onClose?: () => void;
}

export const FadeInUp: React.FC<MotionWrapperProps> = ({
    children,
    className = '',
    delay = 0,
    duration = 0.6
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeInUpDialog: React.FC<MotionWrapperProps> = ({
    children,
    ref,
    onClose,
    className = '',
    delay = 0,
    duration = 0.6
}) => {
    return (
        <motion.dialog
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            ref={ref as React.Ref<HTMLDialogElement> | undefined}
            onClose={onClose}
        >
            {children}
        </motion.dialog>
    );
};

export const FadeInDown: React.FC<MotionWrapperProps> = ({
    children,
    className = '',
    delay = 0,
    duration = 0.6
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeInZoomIn: React.FC<MotionWrapperProps> = ({
    children,
    className = '',
    delay = 0,
    duration = 0.5
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{
                duration,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const OnHoverUnblur: React.FC<Omit<MotionWrapperProps, 'delay' | 'duration'>> = ({
    children,
    className = ''
}) => {
    return (
        <motion.div
            initial={{ filter: 'blur(5px)', opacity: 0.7 }}
            whileHover={{ filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const OnHoverScaleUp: React.FC<Omit<MotionWrapperProps, 'delay' | 'duration'>> = ({
    children,
    className = ''
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};