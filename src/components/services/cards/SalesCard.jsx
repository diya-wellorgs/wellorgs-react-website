export default function SalesCard() {
  const users = [
    {
      name: 'Mike Tylor',
      title: 'Founder',
      email: 'mike@cmb.com',
      company: 'CMB LLC',
      verified: true,
    },
    {
      name: 'Thomas Shelby',
      title: 'Founder',
      email: 'thomas@peaky.com',
      company: 'Shelby Ltd',
      verified: true,
    },
  ];

  return (
    <div className="bg-primary border border-white/10 rounded-t-xl p-2.5 w-full  text-white">
      <div className="flex items-center justify-between bg-bg-secondary border border-white/10  mb-4 p-[5px]">
        <p className="text-12 font-medium">E-mail Sending..</p>
        <div className="w-4 h-4 border-2 border-tertiary border-t-transparent rounded-full animate-spin"></div>
      </div>

      <div className="flex flex-col gap-1">
        {users.map((user, i) => (
          <div
            key={i}
            className={`p-2.5 rounded-sm border 
              
                bg-bg-secondary border-white/10 
              
            `}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center
                     bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm font-medium 
                     'text-white'
                    "
                  >
                    {user.name}
                  </p>
                  <p
                    className="text-xs 
                       text-white/60
                    "
                  >
                    {user.title}
                  </p>
                </div>
              </div>
              <span
                className="text-xs px-2 py-1 rounded-xl 
                  bg-white/10 text-white"
              >
                Verified
              </span>
            </div>
            <div className="flex justify-between **:text-[10px] text-white/60 pt-2 ">
              <div>
                <p>E-mail</p>
                <p
                  className="
                    text-white/80"
                >
                  {user.email}
                </p>
              </div>
              <div>
                <p>Company</p>
                <p className="text-white/80 ">{user.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 px-3">
        <div className="relative h-0.5 bg-white/10 rounded-full">
          <div
            className="absolute top-0 left-0 h-0.5 bg-purple-500 rounded-full"
            style={{ width: '60%' }}
          ></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"></div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full"
            style={{ left: '50%' }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-white/60 mt-2">
          <span>Draft</span>
          <span>Schedule</span>
          <span>Sent</span>
        </div>
      </div>
    </div>
  );
}
