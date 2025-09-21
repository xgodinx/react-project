import MainButton from "../../../UI/MainButton/MainButton";
import MainInput from "../../../UI/MainInput/Input";

export default function SearchPost({ value, onChange }: any) {
  return (
    <form className="search__form" onSubmit={(e) => e.preventDefault()}>
      <MainInput
        type="text"
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder="Search..."
      />
      <MainButton type="submit">Search</MainButton>
    </form>
  );
}
