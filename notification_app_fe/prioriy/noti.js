// notificationPriority.js

const notifications = [
    {
        ID: "78b51a4e-0d80-4f1c-843b-692d6fbf440e",
        Type: "Placement",
        Message: "Marriott International Inc. hiring",
        Timestamp: "2026-05-01 13:43:57",
        read: false
    },
    {
        ID: "6734661f-9b74-4f42-85ca-3187a21058ce",
        Type: "Event",
        Message: "tech-fest",
        Timestamp: "2026-05-01 13:43:51",
        read: false
    },
    {
        ID: "44ddebf4-5b64-496f-997c-f2acc6777f59",
        Type: "Placement",
        Message: "Advanced Micro Devices Inc. hiring",
        Timestamp: "2026-05-01 23:13:45",
        read: false
    },
    {
        ID: "9d19f865-cbff-4d2c-9a1f-600af4617053",
        Type: "Result",
        Message: "internal",
        Timestamp: "2026-05-01 07:13:39",
        read: false
    },
    {
        ID: "d95f742f-71c7-4444-bd21-d94de0b6c0e2",
        Type: "Placement",
        Message: "Visa Inc. hiring",
        Timestamp: "2026-05-02 03:13:33",
        read: false
    },
    {
        ID: "87ef9299-9e53-42e5-917d-b2767df1d0af",
        Type: "Result",
        Message: "end-sem",
        Timestamp: "2026-05-01 19:13:27",
        read: false
    },
    {
        ID: "e3b254be-b738-47c7-bc3f-639ce2ec9884",
        Type: "Result",
        Message: "project-review",
        Timestamp: "2026-05-01 13:43:21",
        read: false
    },
    {
        ID: "a5db3282-d9c8-4c40-9132-8d39434275fe",
        Type: "Result",
        Message: "mid-sem",
        Timestamp: "2026-05-01 09:13:15",
        read: false
    },
    {
        ID: "d24bc192-c197-4805-944f-6b4391833abc",
        Type: "Placement",
        Message: "Marriott International Inc. hiring",
        Timestamp: "2026-05-02 02:13:09",
        read: false
    },
    {
        ID: "fb021f3e-0436-4acb-a0be-51cdc21043d8",
        Type: "Placement",
        Message: "Apple Inc. hiring",
        Timestamp: "2026-05-02 00:13:03",
        read: false
    }
];

// Weight mapping
const weights = {
    Placement: 3,
    Result: 2,
    Event: 1
};

// Function to calculate priority
function getPriority(notification) {
    const weight = weights[notification.Type] || 0;
    const time = new Date(notification.Timestamp).getTime();
    return weight * 1e12 + time;
}

// Get top N notifications
function getTopNotifications(data, n = 10) {
    return data
        .filter(n => !n.read)
        .map(n => ({
            ...n,
            priority: getPriority(n)
        }))
        .sort((a, b) => b.priority - a.priority)
        .slice(0, n);
}

// Run
const top10 = getTopNotifications(notifications, 10);

console.log("Top Priority Notifications:\n");
top10.forEach((n, index) => {
    console.log(`${index + 1}. [${n.Type}] ${n.Message} (${n.Timestamp})`);
});