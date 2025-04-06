# 📋 Project Requirements - FitWay

## ✅ Functional Requirements (FRs)

- [x] Users must be able to register;
- [x] Users must be able to authenticate;
- [x] Users must be able to retrieve their profile when logged in;
- [x] Users must be able to see the number of check-ins they have made;
- [x] Users must be able to view their check-in history;
- [x] Users must be able to search for nearby gyms (within 10km);
- [x] Users must be able to search gyms by name;
- [x] Users must be able to check in at a gym;
- [x] It must be possible to validate a user's check-in;
- [x] It must be possible to register a new gym;

## ✅ Business Rules (BRs)

- [x] Users cannot register with duplicate emails;
- [x] Users cannot check in more than once per day;
- [x] Users can only check in if they are within 100m of the gym;
- [x] Check-ins can only be validated within 20 minutes of creation;
- [x] Only administrators can validate check-ins;
- [x] Only administrators can register gyms;

## ✅ Non-Functional Requirements (NFRs)

- [x] User passwords must be encrypted;
- [x] Application data must be persisted in a PostgreSQL database;
- [x] All lists must be paginated with 20 items per page;
- [x] Users must be identified using a JWT (JSON Web Token);
