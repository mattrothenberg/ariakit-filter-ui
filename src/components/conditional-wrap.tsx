import React from "react";

interface ConditionalWrapProps {
	condition: boolean;
	wrap: (children: JSX.Element) => JSX.Element;
	children: JSX.Element;
}

export const ConditionalWrap = ({
	condition,
	children,
	wrap,
}: ConditionalWrapProps) =>
	condition ? React.cloneElement(wrap(children)) : children;
