type breakpointsType = {
  id: "md" | "sm";
  breakpoint: number;
}[];

const breakpoints: breakpointsType = [
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
