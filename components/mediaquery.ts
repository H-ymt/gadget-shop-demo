type breakpointsType = {
  id: "lg" | "md" | "sm";
  breakpoint: number;
}[];

const breakpoints: breakpointsType = [
  {
    id: "lg",
    breakpoint: 992,
  },
  {
    id: "md",
    breakpoint: 768,
  },
  {
    id: "sm",
    breakpoint: 576,
  },
];

export const MediaQuery = breakpoints.reduce((acc, { id, breakpoint }) => {
  return {
    ...acc,
    [id]: `@media (min-width: ${breakpoint}px)`,
  };
}, {});
