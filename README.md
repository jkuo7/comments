# Comments

A backend API and a frontend React.js page for making and modifying comments as the admin user.

Run `pip install -r requirements.txt` (in a virtual environment) to install Python dependencies.

Run `python manage.py loaddata comments.json` to seed the database.

Run the app with the following command:

```
python manage.py runserver
```

The app can then be accessed from [http://localhost:8000/](http://localhost:8000/).

### JavaScript Compilation

The frontend JavaScript has already been compiled. To recopile, run:

```
npm install --include=dev
npm run dev
```

### Available API calls

**Retrieve the list of comments:**

```
GET /comments/
```

**Add a new comment:**

```
POST /comments/
Content-Type: application/json
{
    "text":
}
```

**Retrieve a specific comment by id:**

```
GET /comments/:commentId/
```

**Edit a specific comment by id:**

```
PATCH /comments/:commentId/
Content-Type: application/json
{
    "text":
}
```

**Delete a specific comment by id:**

```
DELETE /comments/:commentId/
```
