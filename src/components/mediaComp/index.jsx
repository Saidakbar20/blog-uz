import { Box, CircularProgress } from "@mui/material";
import "./media.css";
import { useState } from "react";
import { useEffect } from "react";

export const MediaComp = () => {
  const [pic, setPic] = useState([]);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(false);

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_BASE_URL + `/img?page=1&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.results);
        if (!data.next) {
          setPage(true);
        } else {
          setPage(false);
        }
      });
  }, [limit]);
  const increment = () => {
    setLimit(limit + 9);
  };

  return (
    <section className="media">
      <div className="container">
        <div className="media-inner">
          <h2 className="media-title">Rasmlar</h2>

          <ul className="media-list">
            {pic.length ? (
              pic.map((item, idx) => (
                <li className="media-item" key={idx}>
                  <img src={item.img} alt="img" className="media-img" />
                </li>
              ))
            ) : (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
          </ul>
          <button
            className={page ? "unactive-media-btn" : "media-btn"}
            onClick={increment}
          >
            Yana ko'rish
          </button>
        </div>
      </div>
    </section>
  );
};
