import React from "react";
import {frameworks, technologies} from "./data";

const Technologies = (): JSX.Element => {
  return (
    <div id={"software-development"}>
      <h2>My Drivers</h2>
      <div className={"development"}>
        <div className={"development__frontend"}>
          <h3>Frontend Development</h3>
          <ul>
            <li>Frameworks</li>
            <ul>{frameworks.frontend.map((f: string, i: number) => (
              <li key={`frontend_frameworks_${i}`}>{f}</li>
            ))}
            </ul>
            <li>Technologies</li>
            <ul>{technologies.frontend.map((t: string, i: number) => (
              <li key={`frontend_technology_${i}`}>{t}</li>
            ))}
            </ul>
          </ul>
        </div>
        <div className={"development__backend"}>
          <h3>Backend Development</h3>
          <ul>
            <li>Frameworks</li>
            <ul>{frameworks.backend.map((f: string, i: number) => (
              <li key={`backend_framework_${i}`}>{f}</li>
            ))}
            </ul>
            <li>Technologies</li>
            <ul>{technologies.backend.map((t: string, i: number) => (
              <li key={`backend_technology_${i}`}>{t}</li>
            ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
