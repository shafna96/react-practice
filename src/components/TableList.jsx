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
            <tr key={"header"}>
              {Object.keys(data[0]).map((key) => (
                <th className="bg-purple-700">{key}</th>
              ))}
            </tr>
            {/* <th className="bg-purple-700 ">
                <label className="text-white">
                  <input type="checkbox" className="checkbox border-white" />
                </label>
              </th>
              <th className="bg-purple-700 text-white">Name</th>
              <th className="bg-purple-700 text-white">Job</th>
              <th className="bg-purple-700 text-white">Favorite Color</th>
              <th className="bg-purple-700 text-white"></th> */}
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                {/* {Object.values(d).map((val) => (
                  <td>{val}</td>
                ))} */}
                <td>{d.id}</td>
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
              </tr>
            ))}
            {/* row 1 */}
            {/* <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://modernprofile.files.wordpress.com/2015/03/099-2.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr> */}
            {/* row 2 */}
            {/* <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://static.wixstatic.com/media/7fa065_9d55313c26f849bc87a3287b0a6e0f9f~mv2_d_2880_1920_s_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr> */}
            {/* row 3 */}
            {/* <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://www.elementpack.pro/demo/wp-content/uploads/2019/10/000028.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span className="badge badge-ghost badge-sm">
                  Office Assistant I
                </span>
              </td>
              <td>Crimson</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr> */}
            {/* row 4 */}
            {/* <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">
                  Community Outreach Specialist
                </span>
              </td>
              <td>Indigo</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr> */}
          </tbody>
          {/* foot */}
          {/* <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot> */}
        </table>
      </div>
    </div>
  );
}

export default TableList;
