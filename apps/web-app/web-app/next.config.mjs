// eslint-disable-next-line @typescript-eslint/no-var-requires
import withNx from "@nrwl/next/plugins/with-nx.js";

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
export default withNx({
  webpack5: true,
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
});
