function SubjectItem({ courseNames, credits, grades, months, years }) {
  let data = [];
  for (let i = 0; i < courseNames.length; i++) {
    const object = {
      id: i,
      subjectName: courseNames[i],
      credit: credits[i],
      grade: grades[i],
      month: months[i],
      year: years[i],
    };
    data.push(object);
  }

  const certificateItem = data.map((item) => (
    <tr key={item.id} class="data1strow">
      <td class="tablerow">{item.id + 1}</td>
      <td class="tablerow">{item.subjectName}</td>
      <td class="tablerow">{item.credit}</td>
      <td class="tablerow">{item.grade}</td>
      <td class="tablerow">
        {item.month}, {item.year}
      </td>
    </tr>
  ));
  return <>{certificateItem}</>;
}

export default SubjectItem;
