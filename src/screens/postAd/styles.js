import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  recomendedContainer: {
    // display:'flex',
    // justifyContent:'space-between'
  },
  categoriesContainer: {},
  categoriesHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoriesBox: {
    // height:200,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 20,
    marginRight: 10,
    width: 100,
    height: 100,
    borderRadius:10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rebeccapurple",
    borderStyle: "solid",
  },
  subCategoriesBox: {
    // height:200,
    padding: 10,
    marginBottom: 20,
    marginRight: 10,
    width: 130,
    borderRadius:10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rebeccapurple",
    borderStyle: "solid",
  },
  tinyLogo: {
    height: 30,
    width: 30,
  },
  categoryIcon: {
    justifyContent:'center',
    alignItems:'center'
  },
  categoryText: {
    textTransform:'capitalize',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
  subCategoriesItem:{
    padding: 20,

    
  }
});

export default styles;
