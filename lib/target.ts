import { Octokit } from "@octokit/core";

export interface IGetTargetsProps {
  platform?: string;
  arch?: string;
  version?: string;
}

export const getTargets = async (props: IGetTargetsProps = {}) => {
  const { data } = await new Octokit().request(
    "GET /repos/{owner}/{repo}/releases",
    {
      owner: "nexe",
      repo: "nexe",
      per_page: 1,
    }
  );

  return data[0].assets.filter(({ name }) => {
    const name_array = name.split("-");

    for (const [key, prop] of Object.entries(Object.values(props))) {
      if (prop && name_array[key].toUpperCase() !== prop.toUpperCase()) {
        return false;
      }
    }

    return true;
  });
};
