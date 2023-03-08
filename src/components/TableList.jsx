import React from "react";

const data = [
  {
    id: 1,
    image:
      "https://static.wixstatic.com/media/7fa065_9d55313c26f849bc87a3287b0a6e0f9f~mv2_d_2880_1920_s_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg",
    "item Name": "T shirt",
    unit: "pieces",
  },
  {
    id: 2,
    image:
      "https://static.wixstatic.com/media/7fa065_9d55313c26f849bc87a3287b0a6e0f9f~mv2_d_2880_1920_s_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg",
    "item Name": "T shirt",
    unit: "pieces",
  },
  {
    id: 3,
    image:
      "https://static.wixstatic.com/media/7fa065_9d55313c26f849bc87a3287b0a6e0f9f~mv2_d_2880_1920_s_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg",
    "item Name": "T shirt",
    unit: "pieces",
  },
];

function TableList() {
  return (
    <div className="w-full p-3 bg-white  border rounded border-t-4 border-t-purple-600">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            {/* <tr key={"header"}>
              {Object.keys(data[0]).map((key) => (
                <th className="bg-purple-700">{key}</th>
              ))}
            </tr> */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Unit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                {/* {Object.values(d).map((val) => (
                  <td>{val}</td>
                ))} */}
                <td>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={d.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{d["item Name"]} </td>
                <td>{d.unit}</td>
                <td>
                  <i class="bi bi-pen"></i>
                  <i class="bi bi-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableList;
