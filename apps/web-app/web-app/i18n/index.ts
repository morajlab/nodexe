import en from "./en.json";

let resources: { [key: string]: any } = {
  en,
};

for (const [lang, translation] of Object.entries(resources)) {
  resources[lang] = {
    translation,
  };
}

export { resources };
