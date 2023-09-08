import React from 'react';
import gt from '../../assets/img/gt.svg'
import p from '../../assets/img/p.svg'
import '../../assets/style.css'


const Enrolled = () => {
    return(
      <div className='w-max pl-10 pr-6 pt-4'>
        <div class="flex gap-2 text-[16px]">
          <span className='text-[#857E7E]'>Dashboard</span>
          <img src={gt} alt="" />
          <span className='text-[#0C5B61]'>Enrolled Courses</span>
        </div>
        <div className='text-xl font-bold'>Enrolled Courses</div>
          <div class='flex py-[4px] gap-[43%] mr-4 font-semibold'>
            <div>Courses</div>
            <div className='flex gap-[97%]'>
              <div>Category</div>
              <div>Time</div>
              <div>Status</div>
            </div>
          </div>
        <div id='scroll'>
          <div class='flex pb-[34px] gap-[140px] mr-4 border-b-[1px] border-[#1498A2]'>
            <div className='flex gap-2'>
              <img src={p} alt="" className='h-min'/>
              <span>Mastering the art of UI/Ux desgin in Figma</span>
            </div>
            <div>UI/UX</div>
            <div>2hrs  30mins</div>
            <div>Active</div>
          </div>
          <div class='flex py-[34px] gap-[140px] mr-4 border-b-[1px] border-[#1498A2]'>
            <div className='flex gap-2'>
              <img src={p} alt="" className='h-min'/>
              <span>Mastering the art of UI/Ux desgin in Figma</span>
            </div>
            <div>UI/UX</div>
            <div>2hrs  30mins</div>
            <div>Active</div>
          </div>
          <div class='flex py-[34px] gap-[140px] mr-4 border-b-[1px] border-[#1498A2]'>
            <div className='flex gap-2'>
              <img src={p} alt="" className='h-min'/>
              <span>Mastering the art of UI/Ux desgin in Figma</span>
            </div>
            <div>UI/UX</div>
            <div>2hrs  30mins</div>
            <div>Active</div>
          </div>
          <div class='flex py-[34px] gap-[140px] mr-4 border-b-[1px] border-[#1498A2]'>
            <div className='flex gap-2'>
              <img src={p} alt="" className='h-min'/>
              <span>Mastering the art of UI/Ux desgin in Figma</span>
            </div>
            <div>UI/UX</div>
            <div>2hrs  30mins</div>
            <div>Active</div>
          </div>
          <div class='flex py-[34px] gap-[140px] mr-4 border-b-[1px] border-[#1498A2]'>
            <div className='flex gap-2'>
              <img src={p} alt="" className='h-min'/>
              <span>Mastering the art of UI/Ux desgin in Figma</span>
            </div>
            <div>UI/UX</div>
            <div>2hrs  30mins</div>
            <div>Active</div>
          </div>
          <div class='flex py-[34px] gap-[140px] mr-4 border-b-[1px] border-[#1498A2]'>
            <div className='flex gap-2'>
              <img src={p} alt="" className='h-min'/>
              <span>Mastering the art of UI/Ux desgin in Figma</span>
            </div>
            <div>UI/UX</div>
            <div>2hrs  30mins</div>
            <div>Active</div>
          </div>
          <div class='flex py-[34px] gap-[140px] mr-4 border-b-[1px] border-[#1498A2]'>
            <div className='flex gap-2'>
              <img src={p} alt="" className='h-min'/>
              <span>Mastering the art of UI/Ux desgin in Figma</span>
            </div>
            <div>UI/UX</div>
            <div>2hrs  30mins</div>
            <div>Active</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Enrolled;