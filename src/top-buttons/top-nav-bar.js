import { useState } from "react";
import { BlogForm } from "../exercise-A/Form";

function TopNavBar() {
  return (
    <form>
      <button type="submit" className="btn btn-primary">
        Exercise A
      </button>
      <button type="submit" className="btn btn-primary">
        Exercise B
      </button>
      <button type="submit" className="btn btn-primary">
        Exercise C
      </button>
      <button type="submit" className="btn btn-primary">
        Exercise D
      </button>
      <button type="submit" className="btn btn-primary">
        Exercise E
      </button>
      {/* Prevent default behavior on the button */}
    </form>
  );
}

export { TopNavBar };
