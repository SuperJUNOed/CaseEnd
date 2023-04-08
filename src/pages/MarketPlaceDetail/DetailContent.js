function DetailContent({ data = {}, fileData = {} }) {
  return (
    <div className="pl-2 pt-2 w-full flex flex-col order-first sm:order-last">
      <div className="flex">
        <div className="max-h-96 flex justify-center w-full">
          <img
            className="object-contain h-full"
            src={`https://raw.caseend.com/media/${data?.brand_slug}/${data?.slug}/${data?.slug}.png`}
            width="800"
            height="800"
            data-xblocker="passed"
            style={{ visibility: "visible" }}
            alt="slug"
          />
        </div>
        <div className="flex flex-col overflow-y-auto overflow-x-hidden max-h-96 py-1 pr-2 w-24 sm:w-36">
          <img
            className="border border-gray-800 shadow cursor-pointer mb-1.5 bg-gray-200"
            src={`https://raw.caseend.com/media/${data?.brand_slug}/${data?.slug}/${data?.slug}.png`}
            width="800"
            height="800"
            data-xblocker="passed"
            style={{ visibility: "visible" }}
            alt="slug"
          />
          <img
            className="border border-gray-800 shadow cursor-pointer mb-1.5"
            src={`https://raw.caseend.com/media/${fileData?.[1].path}`}
            width="800"
            height="800"
            data-xblocker="passed"
            style={{ visibility: "visible" }}
            alt="slug1"
          />
          <img
            class="border border-gray-800 shadow cursor-pointer mb-1.5"
            src={`https://raw.caseend.com/media/${fileData?.[2].path}`}
            width="800"
            height="800"
            data-xblocker="passed"
            style={{ visibility: "visible" }}
            alt="slug2"
          />
          <img
            class="border border-gray-800 shadow cursor-pointer mb-1.5"
            src={`https://raw.caseend.com/media/${fileData?.[3].path}`}
            width="800"
            height="800"
            data-xblocker="passed"
            style={{ visibility: "visible" }}
            alt="slug2"
          />
        </div>
      </div>
      <div>
        <div className="text-xs pl-1 pr-2 flex">
          <span className="flex-shrink-0 mr-4">
            Last modified: 11/18/2022, 6:31:26 AM
          </span>
          <a
            className="ml-auto max-w-xs truncate"
            href={data?.url}
            target="_blank"
            rel="noreferrer"
          >
            {data?.url}
          </a>
        </div>
        <div className="flex flex-wrap border-t border-gray-800 my-1 sm:flex-nowrap">
          <ul className="px-2 py-4 flex flex-col flex-grow font-mono">
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">Name</span>
              <span>{data?.name}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">Size</span>
              <span>
                {data?.width}MM(W) x {data?.depth}MM(D) x {data?.height}MM(H)
              </span>
              {/* <span>-</span> */}
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Package Size
              </span>
              <span>
                {data?.package_width &&
                data?.package_depth &&
                data?.package_height
                  ? `${data?.package_width}MM(W) x ${data?.package_depth}MM(D) x ${data?.package_height}MM(H)`
                  : "-"}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">Volume</span>
              <span>{data?.volume ? `${data?.volume}L` : "-"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Package Volume
              </span>
              <span>
                {data?.package_volume ? `${data?.package_volume}L` : "-"}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">Weight</span>
              <span>{data?.weight ? `${data?.weight}KG` : "-"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Package Weight
              </span>
              <span>
                {data?.package_weight ? `${data?.package_weight}KG` : "-"}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Motherboard
              </span>
              <span>
                ITX - {data?.motherboard_width}MM(W) x{" "}
                {data?.motherboard_length}MM(L)
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Power Supply
              </span>
              <span>
                ATX 12V - {data?.psu_width}MM(W) x {data?.psu_length}MM(L) x{" "}
                {data?.psu_height}MM(H)
              </span>
            </li>
          </ul>
          <div className="flex flex-col max-w-sm">
            <div className="my-auto">
              <svg
                className="w-full font-mono"
                version="1.1"
                baseProfile="full"
                textAnchor="middle"
                viewBox="0 0 240 280"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="50"
                  y="50"
                  width="170"
                  height="210"
                  rx="5"
                  ry="5"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="110"
                  y="100"
                  width="50"
                  height="50"
                  rx="4"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="188"
                  y="58"
                  width="8"
                  height="135"
                  rx="2"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="200"
                  y="58"
                  width="8"
                  height="135"
                  rx="2"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="50"
                  y="65"
                  width="20"
                  height="15"
                  rx="1"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="50"
                  y="90"
                  width="15"
                  height="13"
                  rx="1"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="50"
                  y="108"
                  width="15"
                  height="13"
                  rx="1"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="50"
                  y="135"
                  width="25"
                  height="15"
                  rx="1"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="50"
                  y="155"
                  width="25"
                  height="15"
                  rx="1"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="50"
                  y="180"
                  width="30"
                  height="10"
                  rx="1"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="78"
                  y="205"
                  width="115"
                  height="10"
                  rx="2"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="78"
                  y="225"
                  width="115"
                  height="10"
                  rx="2"
                  ry="2"
                ></rect>
                <rect
                  className="stroke-gray-800 fill-transparent"
                  x="78"
                  y="245"
                  width="115"
                  height="10"
                  rx="2"
                  ry="2"
                ></rect>
                <text className="fill-gray-800" x="135" y="20">
                  {data?.motherboard_width}MM
                </text>
                <path
                  className="stroke-gray-800 fill-transparent"
                  d="M50 40
                                                                      V30
                                                                      H220
                                                                      V40"
                ></path>
                <text
                  className="fill-gray-800"
                  x="20"
                  y="155"
                  transform="rotate(-90,20,155)"
                >
                  {data?.motherboard_length}MM
                </text>
                <path
                  className="stroke-gray-800 fill-transparent"
                  d="M40 50
                                                                      H30
                                                                      V260
                                                                      H40"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap border-t border-gray-800 my-1 sm:flex-nowrap">
          <ul className="px-2 py-4 flex flex-col flex-grow font-mono">
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                CPU Max Height
              </span>
              <span>{data?.cpu_height}MM</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Liquid Cooling
              </span>
              <span>
                {data?.liquid_cooling === 1
                  ? "No"
                  : `${data?.liquid_cooling}MM`}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                GPU Max Size
              </span>
              <span>
                {data?.gpu_width}MM(W) x {data?.gpu_length}MM(L) x{" "}
                {data?.gpu_height}MM(H)
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                PCI-E Riser
              </span>
              <span>
                {data?.pcie_riser === 1 ? "Not require" : "Not provided"}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Main PCI-E Slot
              </span>
              <span>{data?.slot ? data?.slot : "-"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Main Low-profile PCI-E Slot
              </span>
              <span>
                {data?.low_profile_slot ? data?.low_profile_slot : "-"}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Extra PCI-E Slot
              </span>
              <span>{data?.extra_slot ? data?.extra_slot : "-"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Extra Low-profile PCI-E Slot
              </span>
              <span>
                {data?.extra_low_profile_slot
                  ? data?.extra_low_profile_slot
                  : "-"}
              </span>
            </li>
          </ul>
        </div>
        <div className="flex border-t border-gray-800 my-1">
          <ul className="px-2 py-4 flex flex-col flex-grow font-mono">
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">Status</span>
              <span>{data?.status === 2 ? "available" : "end of life"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">USB-C</span>
              <span>{data?.usb_c === 1 ? "No" : "Yes"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Skeleton Material
              </span>
              <span>
                {data?.skeleton_material === 1
                  ? "Plastic"
                  : data?.skeleton_material === 2
                  ? "Steel"
                  : data?.skeleton_material === 3
                  ? "Aluminum"
                  : "Other"}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Shell Material
              </span>
              <span>
                {data?.shell_material === 1
                  ? "Plastic"
                  : data?.skeleton_material === 2
                  ? "Steel"
                  : data?.skeleton_material === 3
                  ? "Aluminum"
                  : "Other"}
              </span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">Open</span>
              <span>{data?.open_panel === 1 ? "No" : "Yes"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Solid Panel
              </span>
              <span>{data?.solid_panel === 1 ? "No" : "Yes"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Mesh Panel
              </span>
              <span>{data?.mesh_panel === 1 ? "No" : "Yes"}</span>
            </li>
            <li className="flex flex-wrap">
              <span className="font-bold mr-2 my-1 w-full lg:w-72">
                Transport Panel
              </span>
              <span>
                {data?.transparent_panel === 1
                  ? "No"
                  : data?.transparent_panel === 2
                  ? "Yes"
                  : "Upgradeable"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
