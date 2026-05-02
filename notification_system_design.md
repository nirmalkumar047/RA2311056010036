
# Stage 1 — Notification Priority 

##  Problem

Users receive a large number of notifications and miss important ones.
We need to display the **top N (e.g., 10)** most important unread notifications.

---

##  Approach

### 1. Priority Calculation

Each notification is assigned a priority score based on:

* **Type Weight**

  * Placement = 3
  * Result = 2
  * Event = 1

* **Recency**

  * More recent notifications get higher priority

### Final Formula:

```
Priority = Weight × Large Constant + Timestamp
```

This ensures:

* Type importance dominates
* Recent notifications are prioritized within same type

---

### 2. Filtering

* Only **unread notifications** are considered

---

### 3. Sorting Approach (Basic)

* Sort all notifications based on priority
* Pick top 10

Time Complexity:

```
O(n log n)
```

---

## ⚡ Optimized Approach (For Real-Time System)

Instead of sorting every time:

### Use a **Min Heap (Priority Queue)**

* Maintain only top 10 notifications
* When new notification arrives:

  * If heap size < 10 → insert
  * Else compare with smallest:

    * If higher priority → replace

### Complexity:

```
Insertion: O(log 10) ≈ O(1)
Space: O(10)
```



## 📸 Output
![notifications](<Screenshot 2026-05-02 104935.png>)
![notifications](<Screenshot 2026-05-02 110706.png>)




# Stage 2 — Frontend

## Overview

In this stage, a frontend application was created using React to display notifications. The aim is to help users easily view and identify important notifications.

---

## Features

* **All Notifications**
  Displays all notifications with message, type, and time.

* **Priority Notifications**
  Shows top 10 notifications based on importance and recency.

* **Filtering**
  Users can filter notifications by:

  * Event
  * Result
  * Placement

* **Responsive UI**
  Works on both mobile and desktop screens.

---

## Priority Logic

Priority is calculated using:

* Notification type (Placement > Result > Event)
* Latest time gets higher priority

---


## Running the Project

```bash
npm install
npm run dev
```

![img1](<Screenshot 2026-05-02 124737.png>) 
![img2](<Screenshot 2026-05-02 124724.png>)


