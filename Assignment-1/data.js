
function Data() {
  const { useState } = React;
  let dataArr = [
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchot Text and Semantic Analysis",
    "Competetor Analysis",
    "Anchor Text/URL Mapping",
    "Google Data Studio Report + Local Reporting Suite",
    "Site Level Optimization",
    "On Page Optimization",
    "Content Creation",
    "Content Publishing",
    "Premium Press Release",
    "Authority Niche Placements",
    "Review Management",
    "Index Links",
    "Video Recap",
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>MONTH 1</th>
            <th></th> 
            <th></th> 
            <th></th> 
            <th></th> 
            <th></th>          
          </tr>
        </thead>
        <tbody>
          {dataArr?.map((ele, i) => (
            <tr  key={i}><td contentEditable="true">{ele}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<Data />, document.querySelector("#data"));
