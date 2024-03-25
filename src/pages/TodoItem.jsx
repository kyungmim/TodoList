import PropTypes from "prop-types";

TodoItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.number,
    title: PropTypes.string,
    done: PropTypes.bool,
  }),
};

function TodoItem({ item }) {
  return (
    <>
      {item.done ? (
        <li className="TodoItem">
          {item.done ? (
            <img
              className="check-svg"
              src="src/assets/check_box_dis.svg"
              alt="체크"
            />
          ) : (
            <img
              className="check-svg"
              src="src/assets/check_box_sel.svg"
              alt="체크"
            />
          )}
          <p>{item.title}</p>
          <button type="button" className="delete">
            삭제
          </button>
        </li>
      ) : (
        <li className="TodoItem is_active">
          {item.done ? (
            <img
              className="check-svg"
              src="src/assets/check_box_dis.svg"
              alt="체크"
            />
          ) : (
            <img
              className="check-svg"
              src="src/assets/check_box_sel.svg"
              alt="체크"
            />
          )}
          <p>{item.title}</p>
          <button type="button" className="delete">
            삭제
          </button>
        </li>
      )}
    </>
  );
}

export default TodoItem;
