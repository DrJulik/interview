import { useEffect, useState } from "react";
import React from "react";
import Filters from "../Filters";
import Member from "./Member";

const Members = ({ members, searchString, setMembers }: any) => {
  const [filteredMembers, setFilteredMembers] = useState(members);
  const [filters, setFilters] = useState([] as any);

  useEffect(() => {
    if (searchString) {
      const filteredMembers = members.filter((mem: any) => {
        return mem.name.includes(searchString);
      });
      setMembers(filteredMembers);
    } else {
      setMembers(members);
    }
  }, [searchString]);

  useEffect(() => {
    if (filters.length > 0) {
      const newMembers = members.find((mem: any) => {
        return mem.activities.includes(newMembers[0]);
        // not enough time to finish this
      });
    }
  }, [filters]);
  return (
    <>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="members">
        {members &&
          members.map((member: any) => {
            return (
              <Member
                key={member.id}
                id={member.id}
                name={member.name}
                age={member.age}
                rating={member.rating}
                activities={member.activities}
                members={members}
                setMembers={setMembers}
              />
            );
          })}
      </div>
    </>
  );
};

export default Members;
