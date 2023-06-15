export const colorTypeGradients = (
  type1: string | undefined,
  type2: string | undefined,
  length: number | undefined
) => {
  let color1, color2;
  console.log(type1, type2, length);

  console.log(type1);
  switch (type1) {
    case "Plante":
      color1 = "#a8ff98";
      break;
    case "Poison":
      color1 = "#d6a2e4";
      break;
    case "Normal":
      color1 = "#dcdcdc";
      break;
    case "Feu":
      color1 = "#ffb971";
      break;
    case "Eau":
      color1 = "#8cc4e2";
      break;
    case "Electrik":
      color1 = "#ffe662";
      break;
    case "Glace":
      color1 = "#8cf5e4";
      break;
    case "Combat":
      color1 = "#da7589";
      break;
    case "Sol":
      color1 = "#e69a74";
      break;
    case "Vol":
      color1 = "#bbc9e4";
      break;
    case "Psy":
      color1 = "#ffa5da";
      break;
    case "Insecte":
      color1 = "#bae05f";
      break;
    case "Roche":
      color1 = "#C9BB8A";
      break;
    case "Spectre":
      color1 = "#8291e0";
      break;
    case "Tenebres":
      color1 = "#8e8c94";
      break;
    case "Dragon":
      color1 = "#88a2e8";
      break;
    case "Acier":
      color1 = "#9fb8b9";
      break;
    case "Fée":
      color1 = "#fdb9e9";
      break;
    default:
      color1 = "gainsboro";
      break;
  }

  console.log(type2);
  if (length === 2) {
    switch (type2) {
      case "Plante":
        color2 = "#a8ff98";
        break;
      case "Poison":
        color2 = "#d6a2e4";
        break;
      case "Normal":
        color2 = "#dcdcdc";
        break;
      case "Feu":
        color2 = "#ffb971";
        break;
      case "Eau":
        color2 = "#8cc4e2";
        break;
      case "Electrik":
        color2 = "#ffe662";
        break;
      case "Glace":
        color2 = "#8cf5e4";
        break;
      case "Combat":
        color2 = "#da7589";
        break;
      case "Sol":
        color2 = "#e69a74";
        break;
      case "Vol":
        color2 = "#bbc9e4";
        break;
      case "Psy":
        color2 = "#ffa5da";
        break;
      case "Insecte":
        color2 = "#bae05f";
        break;
      case "Roche":
        color2 = "#C9BB8A";
        break;
      case "Spectre":
        color2 = "#8291e0";
        break;
      case "Tenebres":
        color2 = "#8e8c94";
        break;
      case "Dragon":
        color2 = "#88a2e8";
        break;
      case "Acier":
        color2 = "#9fb8b9";
        break;
      case "Fée":
        color2 = "#fdb9e9";
        break;
      default:
        color2 = "gainsboro";
        break;
    }
  } else if (length === 1) {
    color2 = color1;
  }

  const finalColor = [color1, color2];
  console.log(finalColor);

  return finalColor;
};
