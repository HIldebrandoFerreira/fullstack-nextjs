import React from "react";

interface StyleSheet {
    fontFamily: string
}

interface BoxProps {
    tag: any
    Children: React.ReactNode
    styleSheet: StyleSheet
}

export default function Box({ styleSheet, children, tag }) {
    const Tag = tag || 'div'
    return (
        <Tag style={styleSheet}>
            {children}
        </Tag>
    )
}