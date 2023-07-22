'use client'
import { useEffect, useRef } from 'react';
import { IButtonProps } from './types';
import * as Styles from './styles';

function Button(props: IButtonProps) {
    const {
        children,
        variant,
        styles,
        radius,
        height,
        width,
        margin,
        fontSize,
        loading,
        disabled,
        onClick,
        ripple,
    } = props;

    const buttonRef = useRef<HTMLDivElement | null>(null);
    const rippleRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        let btn = buttonRef.current;
        let ripple = rippleRef.current;

        if (!btn) return;

        const animationEndHandler = () => {
            ripple?.classList.remove('animation');
        };

        const mouseHandler = (e: any) => {
            if (!btn || !ripple) return;

            ripple.style.top = `${
                e.clientY - btn?.getBoundingClientRect()?.top
            }px`;
            ripple.style.left = `${
                e.clientX - btn.getBoundingClientRect().left
            }px`;

            ripple.classList.add('animation');
        };

        btn.addEventListener('mousedown', mouseHandler);
        ripple?.addEventListener('animationend', animationEndHandler);
        return () => {
            btn?.removeEventListener('mousedown', mouseHandler);
            ripple?.addEventListener('animationend', animationEndHandler);
        };
    }, [buttonRef]);

    return (
        <Styles.Wrapper
            ref={buttonRef}
            disabled={disabled}
            styles={styles}
            radius={radius}
            height={height}
            width={width}
            margin={margin}
            fontSize={fontSize}
            variant={variant}
            onClick={loading || disabled ? () => {} : onClick}
        >
            {ripple && (
                <Styles.RippleWrapper>
                    <span ref={rippleRef} className="ripple-span"></span>
                </Styles.RippleWrapper>
            )}
            {children}
        </Styles.Wrapper>
    );
}

export default Button;
