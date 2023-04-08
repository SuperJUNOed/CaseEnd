import { Link } from 'react-router-dom';

function ContentItem({ data = {} }) {
  return (
    <Link to={`/detail/${data?.id}`}>
      <div className='flex flex-col'>
        <img
          className='object-contain cursor-pointer'
          src={`https://raw.caseend.com/media/${data?.brand_slug}/${data?.slug}/${data?.slug}.png`}
          width='800'
          height='800'
          loading='lazy'
          href={data?.url}
          data-xblocker='passed'
          style={{ visibility: 'visible' }}
          alt="slug"
        />
        <div className='flex flex-col flex-shrink-0'>
          <div className='flex px-1 text-xs'>
            <span className='mr-auto'>Available</span>
            <span className='ml-auto'>{data?.volume}L</span>
          </div>
          <div className='flex flex-col justify-around flex-grow px-1 border-t border-gray-800'>
            <h2 className='font-bold font-mono break-all leading-6 truncate'>
              <a href='/data/jxk/jxk-j1'>{data?.name ?? ''}</a>
            </h2>
            <ul className='flex text-xs font-mono mb-1 text-gray-500'>
              <li>ITX</li>
              <li className='mx-0.5'>·</li>
              <li>{data?.psu_type === 3 ? 'ATX 12V' : ''}</li>
              <li className='mx-0.5'>·</li>
              <li>Traditional</li>
            </ul>
            <div className='flex text-xs items-center font-mono'>
              <p className='w-[3ch] flex-shrink-0'>CPU</p>
              <svg
                className='w-full overflow-y-hidden h-3 mx-1'
                viewBox='0 0 100 5'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1 H 100 V4 H1 V1'
                  className='fill-transparent stroke-gray-800 stroke-1'
                ></path>
                <path
                  d={`M2 2 H ${data?.cpu_height*0.6} V3 H2 V2`}
                  className='fill-gray-800'
                ></path>
              </svg>
              <p className='w-[5ch] flex-shrink-0 text-right'>
                {data?.cpu_height}MM
              </p>
            </div>
            <div className='flex text-xs items-center font-mono'>
              <p className='w-[3ch] flex-shrink-0'>GPU</p>
              <svg
                className='w-full overflow-y-hidden h-3 mx-1'
                viewBox='0 0 100 5'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1 H 100 V4 H1 V1'
                  className='fill-transparent stroke-gray-800 stroke-1'
                ></path>
                <path d={`M2 2 H ${data?.gpu_length*0.3} V3 H2 V2`} className='fill-gray-800'></path>
              </svg>
              <p className='w-[5ch] flex-shrink-0 text-right'>
                {data?.gpu_length}MM
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContentItem;
