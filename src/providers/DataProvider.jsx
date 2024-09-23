import { createContext } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
   const info = { hi: "hi" };
   return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};

export default DataProvider;

DataProvider.propTypes = {
   children: PropTypes.node,
};
