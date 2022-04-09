export const userColumns = [{ field: "id", headerName: "ID", width: 95}, {
    field: "user",
    header: "User",
    width: 230,
    renderCell: (params) => {
        return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
                {params.row.lastname}
            </div>
        );
    },},
    {
        field: "email", headerName: "Email", width: 230 
    },
    {
        field: "age", headerName: "Age", width: 100 
    },
    {
        field: "status", headerName: "Status", width: 160, renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];

export const userRows = [
    {
        id: 1,
        username: "Jon ",
        lastname: "Snow",
        img: "https://media.gq.com/photos/5c9d404a8d459e781a1333b5/1:1/w_1296,h_1296,c_limit/How-to-Get-Jon-Snow's-Hair-game-of-thrones-gq-grooming.jpg",
        status: "pending",
        email: "1snow@gmail.com",
        age: 24,
    },
    {
        id: 2,
        username: "Arya ",
        lastname: "Stark",
        img: "https://helios-i.mashable.com/imagery/articles/038ocrhwHbBMw9ccWPQ6wvS/hero-image.fill.size_1248x702.v1623365284.jpg",
        status: "active",
        email: "2arya@gmail.com",
        age: 18,
    },
    {
        id: 3,
        username: "Daenerys ",
        lastname: "Targaryen",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2-courtesy-of-hbo-1558322763.jpg?crop=1xw:0.8888095238095238xh;center,top&resize=1200:*",
        status: "passive",
        email: "3daenerys@gmail.com",
        age: 24,
    },
    {
        id: 4,
        username: "Tyrion ",
        lastname: "Lannister",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/helen-sloan-hbo-1557943959.jpg",
        status: "active",
        email: "4tyrion@gmail.com",
        age: 39,
    },
    {
        id: 5,
        username: "Jaime ",
        lastname: "Lannister",
        img: "https://www.mensjournal.com/wp-content/uploads/mf/nikolaj-main_0.jpg?quality=86&strip=all",
        status: "pending",
        email: "5jaime@gmail.com",
        age: 43,
    },
    {
        id: 6,
        username: "Drogo ",
        lastname: "Dathraki",
        img: "https://hips.hearstapps.com/esq.h-cdn.co/assets/16/34/1472085551-khal-drogo.jpg",
        status: "active",
        email: "6drogo@gmail.com",
        age: 35,
    },
    {
        id: 7,
        username: "Cersei ",
        lastname: "Lannister",
        img: "https://watchersonthewall.com/wp-content/uploads/2019/02/Cersei-Lannister-Red-Keep-Season-8-2.jpg",
        status: "passive",
        email: "7cersei@gmail.com",
        age: 43,
    },
    {
        id: 8,
        username: "The King ",
        lastname: "White Walker",
        img: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Night-King-Game-Of-Thrones-Season-7-Cropped.jpg",
        status: "pending",
        email: "8whitewalker@gmail.com",
        age: 35,
    },
    {
        id: 9,
        username: "Commander ",
        lastname: "White Walker",
        img: "https://cdn.vox-cdn.com/thumbor/DIOBR9zCJ88D3drY4gmumdvVkFQ=/0x0:1018x679/2050x1367/cdn.vox-cdn.com/uploads/chorus_image/image/33913513/gameofthrones_whitewalker1_1020.0.jpg",
        status: "passive",
        email: "9commander@gmail.com",
        age: 35,
    },
    {
        id: 10,
        username: "Drogon ",
        lastname: "Dragon",
        img: "https://cdn.vox-cdn.com/thumbor/9fp3onm4PD_RyBvez31-UYpps2Q=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16131305/Game_of_Thrones_S08E01_dragon.jpg",
        status: "active",
        email: "10drogon@gmail.com",
        age: 150,
    },
];