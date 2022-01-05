import { useState } from "react";
import { Select, Loader } from "@mantine/core";
import { Search, ChevronDown } from "react-feather";
import { useTranslation } from "react-i18next";
import type {
  SearchInputComponent,
  RightSectionComponent,
  SearchPackageFunction,
} from "./SearchInput.types";

const searchPackage: SearchPackageFunction = async (name) => {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${name}`
  );

  return await res.json();
};

const RightSection: RightSectionComponent = ({ type }) => {
  switch (type) {
    case "load":
      return <Loader size="xs" />;
    case "chevrondown":
      return <ChevronDown />;
  }

  return null;
};

export const SearchInput: SearchInputComponent = ({ ...rest }) => {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<string[]>([]);
  const { t } = useTranslation();

  const onSearchChangeHandler = async (name: string) => {
    setData([]);

    if (name && name.trim().length > 0) {
      setCount(-1);
      const result = await searchPackage(name);

      if (result.objects.length > 0) {
        setData(Object.values(result.objects).map((obj) => obj.package.name));

        if (data.length > 0) {
          setCount(1);
          return;
        }
      }
    }

    setCount(0);
  };

  const onChangeHandler = (value: string) => {
    console.log(value);
  };

  return (
    <Select
      data={data}
      placeholder={t("input-package-name")}
      label={t("input-package-name")}
      icon={<Search />}
      rightSection={
        <RightSection
          type={count > -1 ? (count > 0 ? "chevrondown" : undefined) : "load"}
        />
      }
      nothingFound="No options"
      onSearchChange={onSearchChangeHandler}
      onChange={onChangeHandler}
      searchable
    />
  );
};

export default SearchInput;
