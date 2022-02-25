import FishCard from "./FishCard";

export default function RightSideBar({
  showList,
  myList,
  searchHistory,
  handleRemoveFromListClick,
  handleHistoryCardClick,
}) {
  let properHtml = showList ? (
    <div className="my-list">
      <h1>My list</h1>
      {mylist.map((fish, index) => (
        <FishCard
          fish={fish}
          key={fish.name + index}
          isListCard={true}
          index={index}
          handleRemoveFromListClick={handleRemoveFromListClick}
        />
      ))}
    </div>
  ) : (
    <div className="search-history">
      <h1>Searched Fish</h1>
      {searchHistory.map((fish, index) => (
        <FishCard
          fish={fish}
          key={fish.name + index}
          index={index}
          handleHistoryCardClick={handleHistoryCardClick}
        />
      ))}
    </div>
  );

  return <div className="right-bar column">{properHtml}</div>;
}

