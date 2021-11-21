import { ComponentProps } from "react";
import {
  Dropzone as MantineDropzone,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { Group, Text, useMantineTheme } from "@mantine/core";
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

function getIconColor(status, theme) {
  return status.accepted
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colorScheme === "dark"
    ? theme.colors.dark[0]
    : theme.black;
}

export const Dropzone: DropzoneComponent<
  ComponentProps<typeof MantineDropzone>
> = ({ ...rest }) => {
  const theme = useMantineTheme();

  return (
    <MantineDropzone
      onDrop={console.log}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
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
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      )}
    </MantineDropzone>
  );
};

export default Dropzone;
