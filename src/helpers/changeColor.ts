export const changeColor = (name: string, newColor: string) => {
  const root: HTMLElement | null = document.querySelector(':root');
  if (!root) {
    return
  } 

  root.style.setProperty(name, newColor);
}