export const useSmoothScrollOnClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const cleanHash = e.currentTarget.hash.substring(1);
  const element = document.getElementById(cleanHash);

  // smooth scroll behavior
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
