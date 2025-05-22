# JobSync API Documentation

## Base URL

```
http://localhost:5000/api
```

## Authentication

Most endpoints require authentication using JWT tokens. Include the token in the
Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### Token Security

- Tokens expire after 24 hours
- Refresh tokens are required for long-term sessions
- Tokens are invalidated on logout
- Multiple device login is not supported (one active session per user)

## Security Headers

The API implements the following security headers:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=31536000; includeSubDomains
Content-Security-Policy: default-src 'self'
```

## User Routes

Base path: `/api/users`

### Public Routes

| Method | Endpoint | Description     | Request Body                                                         | Security Measures                                         |
| ------ | -------- | --------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| POST   | `/login` | User login      | `{ "email": "string", "password": "string" }`                        | Rate limiting, IP blocking after 5 failed attempts        |
| POST   | `/`      | Create new user | `{ "name": "string", "email": "string", "password": "string", ... }` | Password strength validation, email verification required |
| GET    | `/`      | Get all users   | -                                                                    | Admin only access                                         |
| GET    | `/:id`   | Get user by ID  | -                                                                    | Rate limiting                                             |

### Protected Routes

| Method | Endpoint          | Description             | Request Body | Security Measures         |
| ------ | ----------------- | ----------------------- | ------------ | ------------------------- |
| GET    | `/user-dashboard` | Get user dashboard data | -            | Role-based access control |

## Employer Routes

Base path: `/api/employers`

### Public Routes

| Method | Endpoint | Description         | Request Body                                                         | Security Measures                                  |
| ------ | -------- | ------------------- | -------------------------------------------------------------------- | -------------------------------------------------- |
| POST   | `/login` | Employer login      | `{ "email": "string", "password": "string" }`                        | Rate limiting, IP blocking after 5 failed attempts |
| POST   | `/`      | Create new employer | `{ "name": "string", "email": "string", "password": "string", ... }` | Business email verification, company verification  |
| GET    | `/`      | Get all employers   | -                                                                    | Admin only access                                  |
| GET    | `/:id`   | Get employer by ID  | -                                                                    | Rate limiting                                      |

### Protected Routes

| Method | Endpoint              | Description                 | Request Body | Security Measures         |
| ------ | --------------------- | --------------------------- | ------------ | ------------------------- |
| GET    | `/employer-dashboard` | Get employer dashboard data | -            | Role-based access control |

## Job Routes

Base path: `/api/jobs`

### Public Routes

| Method | Endpoint | Description   | Request Body | Security Measures                  |
| ------ | -------- | ------------- | ------------ | ---------------------------------- |
| GET    | `/`      | Get all jobs  | -            | Rate limiting, pagination required |
| GET    | `/:id`   | Get job by ID | -            | Rate limiting                      |

### Protected Routes

| Method | Endpoint        | Description                           | Request Body | Security Measures         |
| ------ | --------------- | ------------------------------------- | ------------ | ------------------------- |
| GET    | `/matched`      | Get matched jobs for logged-in user   | -            | Role-based access control |
| GET    | `/employer/:id` | Get jobs posted by specific employer  | -            | Role-based access control |
| GET    | `/match`        | Get job matches based on user profile | -            | Role-based access control |

## Application Routes

Base path: `/api/applications`

### Protected Routes

| Method | Endpoint  | Description     | Request Body                                  | Security Measures                            |
| ------ | --------- | --------------- | --------------------------------------------- | -------------------------------------------- |
| POST   | `/:jobId` | Apply for a job | `FormData: { resume: File, message: string }` | File validation, size limits, virus scanning |

## Password Reset Routes

Base path: `/api`

| Method | Endpoint                 | Description               | Request Body               | Security Measures                              |
| ------ | ------------------------ | ------------------------- | -------------------------- | ---------------------------------------------- |
| POST   | `/forgot-password`       | Request password reset    | `{ "email": "string" }`    | Rate limiting, email verification              |
| POST   | `/reset-password/:token` | Reset password with token | `{ "password": "string" }` | Token expiration, password strength validation |

## Response Format

All responses follow this format:

```json
{
  "success": boolean,
  "data": object | array | null,
  "error": string | null,
  "timestamp": string,
  "requestId": string
}
```

## Error Codes

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 429: Too Many Requests
- 500: Internal Server Error

## File Upload

- Supported file types: PDF, DOC, DOCX
- Maximum file size: 5MB
- File field name: "resume"
- Virus scanning enabled
- File type validation
- Content-Disposition header sanitization
- Unique filename generation

## Rate Limiting

- 100 requests per 15 minutes per IP address
- 5 failed login attempts per 15 minutes
- 10 password reset requests per hour
- 50 file uploads per day per user

## Security Measures

- All endpoints except public ones require JWT authentication
- Passwords are hashed using bcrypt with salt rounds of 12
- CORS enabled for specified origins with strict configuration
- Helmet.js for security headers
- SQL injection prevention through parameterized queries
- XSS protection through input sanitization
- CSRF protection through tokens
- Request validation using express-validator
- Secure session management
- Audit logging for sensitive operations
- Regular security headers updates
- API versioning for backward compatibility

## Best Practices

1. Always use HTTPS in production
2. Implement proper logging and monitoring
3. Regular security audits
4. Keep dependencies updated
5. Implement proper error handling
6. Use environment variables for sensitive data
7. Regular backup of data
8. Implement proper input validation
9. Use prepared statements for database queries
10. Implement proper session management

## Request Validation

Each route file should include request validation using express-validator.
