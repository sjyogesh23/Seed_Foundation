import React from "react";
import "./Initiativestyle.css";

export const InitHeader = (props) => {
  console.log("prop", props.Loi);

  return (
    <div className="init_over_container">
      <div className="row">
        <div className="init_over col-md-8">
          <div className="init_over_title logo_color">
            Overview of Initiatives
          </div>
          <div className="init_over_div">
            {Array.isArray(props?.overview) &&
              props.overview.map((item) => (
                <div key={item.id}>
                  <div className="init_over_l">{item.description}</div>
                  <ol className="init_over_ul">
                    {Array.isArray(item.content) &&
                      item.content.map((listItem, index) => (
                        <li key={index} className="init_over_li">
                          {listItem}
                        </li>
                      ))}
                  </ol>
                </div>
              ))}
          </div>
        </div>

        <div className="init_loi col-md-4">
          <div className="init_over_title logo_color">Line of Initiatives</div>
          {Array.isArray(props.Loi) && props.Loi.length > 0 && (
            <div>
              {props.Loi.map((item) => (
                <div key={item.id}>
                  <div className="init_loi_Hed">{item.title}</div>
                  <div className="marquee_contanier">
                    {Array.isArray(item.content) &&
                      item.content.map((subItem) => (
                        <div key={subItem.id}>
                          <div className="init_loi_subHed">{subItem.title}</div>
                          <div className="init_loi_desc">{subItem.desc}</div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
