import React from "react";

export default function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const reference = domRef.current;
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(reference);
        return () => observer.unobserve(reference);
    }, []);
    return (
        <div
            className={`${props.transform === undefined ? "fade-in-section-with-transform" : "fade-in-section-no-transform"} ${isVisible ? "is-visible" : ""} ${props.className}`}
            style={{ transitionDelay: `${props.delay}` }}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}