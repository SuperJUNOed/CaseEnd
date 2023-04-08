import { useSelector } from "react-redux";
import { setFilterItem } from "./marketplace.action";
import { useDispatch } from "react-redux";

function SideBar() {
  const dispatch = useDispatch();
  const filterItem = useSelector((store) => store?.filterItem ?? {});
  const store = useSelector((store) => store);
console.log(store, "ddddddd");
  function handleClick(data) {
    if (filterItem?.[data?.title]?.find((i) => i === data?.val) ?? false) {
      dispatch(
        setFilterItem({
          [data?.title]: filterItem?.[data?.title].filter(
            (i) => i !== data?.val
          ),
        })
      );
    } else {
      dispatch(
        setFilterItem({
          [data?.title]: Array.isArray(filterItem[data?.title])
            ? [...filterItem[data?.title], data?.val]
            : [data?.val],
        })
      );
    }
  }
  return (
    <aside className="w-full my-2 h-72 overflow-y-auto scrollbar-hide border-b border-gray-800 flex-shrink-0 sm:w-64 sm:pr-2 sm:border-b-0 sm:border-r sm:h-[calc(100vh-1rem)] sm:sticky sm:top-2">
      {/* <div className='flex items-center text-xs border-b border-gray-800 pb-2 px-2 sticky top-0 bg-white  sm:pr-0'>
        <button className='px-2 py-1 mr-2 button-checked' type='button'>
          Volume↑
        </button>
        <button className='px-2 py-1 button' type='button'>
          Volume↓
        </button>
        <button className='px-2 py-1 ml-auto button' type='button'>
          Reset
        </button>
      </div> */}
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">1. Motherboard</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.motherboard?.find((item) => item === 100)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "motherboard", val: 100 })}
          >
            ITX
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.motherboard?.find((item) => item === 200)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "motherboard", val: 200 })}
          >
            M-ATX
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.motherboard?.find((item) => item === 300)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "motherboard", val: 300 })}
          >
            ATX
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.motherboard?.find((item) => item === 400)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "motherboard", val: 400 })}
          >
            E-ATX
          </button>
        </div>
        {/* <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='L'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div> */}
      </div>
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">2. Power Supply</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.psu?.find((item) => item === 100)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "psu", val: 100 })}
          >
            Included
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.psu?.find((item) => item === 200)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "psu", val: 200 })}
          >
            DC
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.psu?.find((item) => item === 300)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "psu", val: 300 })}
          >
            Flex ATX
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.psu?.find((item) => item === 400)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "psu", val: 400 })}
          >
            SFX
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.psu?.find((item) => item === 500)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "psu", val: 500 })}
          >
            SFX-L
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.psu?.find((item) => item === 600)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "psu", val: 600 })}
          >
            ATX 12V
          </button>
        </div>
        {/* <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='L'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='H'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div> */}
      </div>
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">3. Structure</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 1)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 1 })}
          >
            Traditional
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 2 })}
          >
            A4
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 3)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 3 })}
          >
            Front PSU
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 4)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 4 })}
          >
            Workstation
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 5)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 5 })}
          >
            NAS
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 6)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 6 })}
          >
            Sub Region
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 7)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 7 })}
          >
            Horizontal
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.structure?.find((item) => item === 8)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "structure", val: 8 })}
          >
            Vertical
          </button>
        </div>
      </div>
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">4. Volume</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.volume?.find((item) => item === 1)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "volume", val: 1 })}
          >
            5L
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.volume?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "volume", val: 2 })}
          >
            10L
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.volume?.find((item) => item === 3)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "volume", val: 3 })}
          >
            15L
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.volume?.find((item) => item === 4)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "volume", val: 4 })}
          >
            20L
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.volume?.find((item) => item === 5)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "volume", val: 5 })}
          >
            &gt;20L
          </button>
        </div>
        {/* <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='D'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='H'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div> */}
      </div>
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">5. Side Panel</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.open_panel?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "open_panel", val: 2 })}
          >
            Open
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.mesh_panel?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "mesh_panel", val: 2 })}
          >
            Mesh
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.transparent_panel?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "transparent_panel", val: 2 })}
          >
            Transparent
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.solid_panel?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "solid_panel", val: 2 })}
          >
            Solid
          </button>
        </div>
      </div>
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">6. Liquid Cooling</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.liquid_cooling?.find((item) => item === 120)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "liquid_cooling", val: 120 })}
          >
            120MM
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.liquid_cooling?.find((item) => item === 140)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "liquid_cooling", val: 140 })}
          >
            140MM
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.liquid_cooling?.find((item) => item === 240)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "liquid_cooling", val: 240 })}
          >
            240MM
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.liquid_cooling?.find((item) => item === 280)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "liquid_cooling", val: 280 })}
          >
            280MM
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.liquid_cooling?.find((item) => item === 360)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "liquid_cooling", val: 360 })}
          >
            360MM
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.liquid_cooling?.find((item) => item === 420)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "liquid_cooling", val: 420 })}
          >
            420MM
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.liquid_cooling?.find((item) => item === 1)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "liquid_cooling", val: 1 })}
          >
            Air Cooling
          </button>
        </div>
      </div>
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">7. Skeleton Material</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.skeleton_material?.find((item) => item === 1)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "skeleton_material", val: 1 })}
          >
            Plastic
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.skeleton_material?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "skeleton_material", val: 2 })}
          >
            Steel
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.skeleton_material?.find((item) => item === 3)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "skeleton_material", val: 3 })}
          >
            Aluminum
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.skeleton_material?.find((item) => item === 4)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "skeleton_material", val: 4 })}
          >
            Other
          </button>
        </div>
      </div>
      <div className="pt-2">
        <h3 className="px-2 py-1 font-bold text-lg">8. Shell Material</h3>
        <div className="flex flex-wrap text-xs pl-2">
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.shell_material?.find((item) => item === 1)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "shell_material", val: 1 })}
          >
            Plastic
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.shell_material?.find((item) => item === 2)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "shell_material", val: 2 })}
          >
            Steel
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.shell_material?.find((item) => item === 3)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "shell_material", val: 3 })}
          >
            Aluminum
          </button>
          <button
            className={`mb-2 px-2 py-1 mr-2 ${
              filterItem?.shell_material?.find((item) => item === 4)
                ? "bg-gray-500 text-white"
                : "hover:bg-slate-200 button"
            }`}
            type="button"
            onClick={() => handleClick({ title: "shell_material", val: 4 })}
          >
            Other
          </button>
        </div>
      </div>
      {/* <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>9. Slot</h3>
        <div className='pl-2 flex flex-col'>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Main Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Extra Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Main Low-profile Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='Extra Low-profile Slot'
              min='0'
              max='999'
              value=''
            />
          </div>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>10. GPU&amp;CPU</h3>
        <div className='pl-2 flex'>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='W'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='H'
              min='0'
              max='999'
              value=''
            />
            <span className='mx-1.5'>x</span>
          </span>
          <span>
            <input
              className='w-16 mb-2 number'
              type='number'
              placeholder='L'
              min='0'
              max='999'
              value=''
            />
          </span>
        </div>
        <div className='pl-2 flex flex-col'>
          <div className='mb-2'>
            <input
              className='w-full h-8 number'
              type='number'
              placeholder='CPU Max Height'
              min='0'
              max='999'
              value=''
            />
          </div>
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='px-2 py-1 font-bold text-lg'>11. Extra</h3>
        <div className='flex flex-wrap text-xs pl-2'>
          <button className='mb-2 px-2 py-1 mr-2 button' type='button'>
            USB-C
          </button>
          <button className='mb-2 px-2 py-1 button' type='button'>
            Available
          </button>
        </div>
      </div> */}
    </aside>
  );
}

export default SideBar;
