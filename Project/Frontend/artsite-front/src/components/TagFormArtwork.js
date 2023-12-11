import { useArtworkContext } from "../hooks/useArtworkContext";

const TagForm = () => {
  const { tags, dispatch } = useArtworkContext();

  function handleTags(e) {
    if (e.key === " ") e.preventDefault();
    if (e.key !== "Enter") return;
    e.preventDefault();
    const tag = e.target.value;
    if (!tag.trim()) return;
    dispatch({ type: "TAGS_CHANGE", payload: tag });
    e.target.value = "";
  }

  function removeTag(tag) {
    dispatch({ type: "REMOVE_TAG", payload: tag });
  }

  return (
    <>
      <input
        type="text"
        name="tags"
        placeholder="Add tags to your artwork"
        onKeyDown={handleTags}
      />
      <div className="tags">
        {tags &&
          tags.map((tag, index) => (
            <div className="tag-item" key={index}>
              <span className="tag-text">{tag}</span>
              <span className="tag-remove" onClick={() => removeTag(tag)}>
                X
              </span>
            </div>
          ))}
      </div>
    </>
  );
};

export default TagForm;
