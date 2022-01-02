import { ComponentProps } from "react";
import {
  Dropzone as MantineDropzone,
  DropzoneStatus,
  MIME_TYPES,
} from "@mantine/dropzone";
import { Group, Text, useMantineTheme, MantineTheme } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Upload, Package, Loader } from "react-feather";
import type { DropzoneComponent } from "./Dropzone.types";

const ImageUploadIcon = ({ status, ...props }) => {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <Loader {...props} />;
  }

  return <Package {...props} />;
};

const getIconColor = (status: DropzoneStatus, theme: MantineTheme) =>
  status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === "dark"
    ? theme.colors.dark[0]
    : theme.black;

export const Dropzone: DropzoneComponent<
  ComponentProps<typeof MantineDropzone>
> = ({ ...rest }) => {
  const { t } = useTranslation();
  const theme = useMantineTheme();

  return (
    <MantineDropzone
      onDrop={console.log}
      maxSize={3 * 1024 ** 2}
      multiple={false}
      accept={[MIME_TYPES.zip]}
      {...rest}
    >
      {(status) => (
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: "none" }}
        >
          <ImageUploadIcon
            status={status}
            style={{
              width: 80,
              height: 80,
              color: getIconColor(status, theme),
            }}
          />
          <div>
            <Text size="xl" inline>
              {t("dropzone-label")}
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              {t("dropzone-desc")}
            </Text>
          </div>
        </Group>
      )}
    </MantineDropzone>
  );
};

export default Dropzone;
