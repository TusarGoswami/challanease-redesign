/**
 * CarLoader — a custom 2D animated car loader.
 * Simulates a car driving on a road with spinning wheels, bouncing body,
 * and a speed camera flash effect to match the traffic theme.
 */
export default function CarLoader() {
  return (
    <div className="flex flex-col items-center justify-center py-6 overflow-hidden relative w-full select-none" role="status" aria-live="polite">
      
      {/* 2D Drive Scene Container */}
      <div className="relative w-full max-w-[240px] h-[70px] flex items-end justify-center mb-3">
        
        {/* Speed Camera on a Pole */}
        <div className="absolute right-4 bottom-2 flex flex-col items-center z-0 scale-75 opacity-80" aria-hidden="true">
          {/* Camera head */}
          <div className="w-6 h-5 bg-amber-500 rounded-md border border-amber-600 flex items-center justify-center relative">
            <span className="w-2.5 h-2.5 rounded-full bg-navy-900 border border-white/40 block" />
            {/* Flash lens */}
            <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
          {/* Pole */}
          <div className="w-1 h-8 bg-navy-400" />
        </div>

        {/* 2D Vector Car */}
        <div className="animate-car-bounce relative z-10 w-[76px] h-[32px] mb-1">
          {/* Upper Cabin */}
          <div className="absolute top-0 left-[16px] w-[38px] h-[14px] bg-sky-500 rounded-t-[10px] border-t border-x border-sky-400">
            {/* Window cuts */}
            <div className="absolute top-1 left-2 w-[11px] h-[8px] bg-sky-100 rounded-tl-[4px]" />
            <div className="absolute top-1 right-2 w-[11px] h-[8px] bg-sky-100 rounded-tr-[4px]" />
          </div>
          
          {/* Lower Body */}
          <div className="absolute bottom-0 left-0 w-[76px] h-[18px] bg-sky-600 rounded-t-[5px] rounded-b-[4px] border-b border-sky-700">
            {/* Front Headlight */}
            <div className="absolute top-2 right-1 w-1.5 h-1 bg-yellow-300 rounded-full animate-pulse" />
            {/* Back Taillight */}
            <div className="absolute top-2 left-0.5 w-1 h-1.5 bg-red-500 rounded-full" />
          </div>

          {/* Front Wheel */}
          <div className="absolute bottom-[-5px] right-[12px] w-[14px] h-[14px] bg-navy-950 rounded-full border border-navy-800 flex items-center justify-center animate-wheel-spin">
            {/* Spokes cross */}
            <div className="w-full h-[1px] bg-navy-300" />
            <div className="absolute w-[1px] h-full bg-navy-300" />
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full" />
          </div>

          {/* Rear Wheel */}
          <div className="absolute bottom-[-5px] left-[12px] w-[14px] h-[14px] bg-navy-950 rounded-full border border-navy-800 flex items-center justify-center animate-wheel-spin">
            {/* Spokes cross */}
            <div className="w-full h-[1px] bg-navy-300" />
            <div className="absolute w-[1px] h-full bg-navy-300" />
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </div>

        {/* Moving Road Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-navy-200 overflow-hidden" aria-hidden="true">
          <div className="w-[500px] h-full bg-repeating-road animate-road-slide" />
        </div>

        {/* Speed camera flash overlay */}
        <div className="absolute inset-0 bg-white opacity-0 animate-camera-flash pointer-events-none z-30" aria-hidden="true" />
      </div>

      <span className="text-xs font-semibold text-navy-500 tracking-wider">
        Scanning vehicle records…
      </span>
    </div>
  )
}
