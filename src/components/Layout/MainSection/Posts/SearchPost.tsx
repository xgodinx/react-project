import MainButton from "../../../UI/MainButton/MainButton";
import MainInput from "../../../UI/MainInput/Input";

export default function SearchPost({ value, onChange, setModal }: any) {
  return (
    <form className="search__form" onSubmit={(e) => e.preventDefault()}>
      <div className="search__input">
        <MainInput
          type="text"
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder="Search posts"
        />
        <MainButton type="submit">Search</MainButton>
      </div>
      <div className="newPostBtn">
        <MainButton onClick={() => setModal(true)}>New Post</MainButton>
      </div>
    </form>
  );
}
