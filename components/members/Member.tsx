import React from "react";

const Member = ({
  id,
  name,
  age,
  rating,
  activities,
  setMembers,
  members,
}: any) => {
  const deleteMember = (id: number) => {
    const newMembers = members.filter((member: any) => {
      return id !== member.id;
    });
    setMembers(newMembers);
  };

  return (
    <div className="member">
      {/* <img src="1.jpg" alt="" /> */}
      <div className="member-info">
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
        <p>Rating: {rating}/10</p>
        <p>
          Recent activities:{" "}
          {activities.map((act: String) => {
            return (
              <span>
                {act.toLowerCase().charAt(0).toUpperCase() +
                  act.toLowerCase().slice(1)}{" "}
              </span>
            );
          })}
        </p>
      </div>
      <span className="delete-icon" onClick={() => deleteMember(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-trash-2"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </span>
    </div>
  );
};

export default Member;
