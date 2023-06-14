import { MenuItem } from "@mui/material";

const initListType = () => {
  // list des types en francais en objet menuItems
  const list = [
    <MenuItem key={"Acier1"} value={"Acier"}>
      Acier
    </MenuItem>,
    <MenuItem key={"Combat2"} value={"Combat"}>
      Combat
    </MenuItem>,
    <MenuItem key={"Dragon3"} value={"Dragon"}>
      Dragon
    </MenuItem>,
    <MenuItem key={"Eau4"} value={"Eau"}>
      Eau
    </MenuItem>,
    <MenuItem key={"Electrik5"} value={"Electrik"}>
      Electrik
    </MenuItem>,
    <MenuItem key={"Fée6"} value={"Fée"}>
      Fée
    </MenuItem>,
    <MenuItem key={"Feu7"} value={"Feu"}>
      Feu
    </MenuItem>,
    <MenuItem key={"Glace8"} value={"Glace"}>
      Glace
    </MenuItem>,
    <MenuItem key={"Insecte9"} value={"Insecte"}>
      Insecte
    </MenuItem>,
    <MenuItem key={"Normal10"} value={"Normal"}>
      Normal
    </MenuItem>,
    <MenuItem key={"Plante11"} value={"Plante"}>
      Plante
    </MenuItem>,
    <MenuItem key={"Poison12"} value={"Poison"}>
      Poison
    </MenuItem>,
    <MenuItem key={"Psy13"} value={"Psy"}>
      Psy
    </MenuItem>,
    <MenuItem key={"Roche14"} value={"Roche"}>
      Roche
    </MenuItem>,
    <MenuItem key={"Sol15"} value={"Sol"}>
      Sol
    </MenuItem>,
    <MenuItem key={"Spectre16"} value={"Spectre"}>
      Spectre
    </MenuItem>,
    <MenuItem key={"Ténèbres17"} value={"Ténèbres"}>
      Ténèbres
    </MenuItem>,
    <MenuItem key={"Vol18"} value={"Vol"}>
      Vol
    </MenuItem>,
  ];
  return list;
};

export default initListType;
