interface ZIndex {
  SEARCHBAR_MODAL: {
    CONTENTS: number;
    DIM: number;
    WRAP: number;
  };
  FILTER_CONTAINER: number;
  SEARCH_BTN: number;
  HEADER: number;
}

const Z_INDEX: ZIndex = {
  SEARCHBAR_MODAL: {
    CONTENTS: 100,
    DIM: 70,
    WRAP: 80,
  },
  FILTER_CONTAINER: 90,
  SEARCH_BTN: 90,
  HEADER: 10,
};

export default Z_INDEX;
