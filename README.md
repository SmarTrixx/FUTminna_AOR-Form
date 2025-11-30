# Federal University of Technology, Minna - Assignment of Responsibility (AOR) Form

A digital form application for managing Assignment of Responsibility (AOR) for lecturers at Federal University of Technology, Minna.

## Overview

This is a web-based AOR form that enables lecturers to digitally document their academic and administrative responsibilities, including teaching assignments, administrative duties, research projects, and community service activities.

## Features

- **Lecturer Information Management** - Store personal and academic details
- **Teaching Assignment Tracking** - Record course information with dynamic row management
- **Administrative Duties** - Document administrative responsibilities
- **Funded Research & Consultancy** - Track research projects and funding details
- **Community Service** - Record community engagement activities
- **Certification** - Digital signature fields for lecturer, HOD, and Dean approval
- **Data Persistence** - Save form data locally in browser storage
- **Print & Preview** - Preview form summary and print capabilities
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## Project Structure

```
FUTMinna_AOR-form/
├── index.html          # Main form structure
├── styles.css          # Form styling and layout
├── script.js           # Form interactions and functionality
├── README.md           # This file
└── .gitignore          # Git ignore file
```

## Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server or dependencies required

### Installation

1. Clone or download the project:
```bash
git clone <repository-url>
cd FUTMinna_AOR-form
```

2. Open `index.html` in your web browser:
```bash
# Using Python 3
python -m http.server 8000

# Or simply double-click index.html in your file explorer
```

3. Access the form at `http://localhost:8000` (if using server) or directly from your file system.

## Usage

### Filling Out the Form

1. **Lecturer Information** - Start by entering your personal details, department, and position
2. **Teaching Section** - Click "+ Add Course" to add teaching assignments
3. **Administrative Duties** - Click "+ Add Duty" to record administrative responsibilities
4. **Research & Consultancy** - Click "+ Add Project" to document research projects
5. **Community Service** - Click "+ Add Service" to record community engagement
6. **Certification** - Add signatures from lecturer, HOD, and Dean

### Adding/Removing Rows

- Click **+ Add [Item]** button to add new rows to any section
- Click **Delete** button on individual rows to remove them
- Click **Remove** button to clear an entire section

### Saving Your Work

- Click **Save** button to save the form data locally
- Form data is stored in your browser's localStorage
- Your data persists even after closing and reopening the browser

### Preview and Print

- Click **Preview Summary** to see a formatted summary of your form
- Use the print functionality to generate a PDF or print the form
- Click **Clear** to reset all form fields

## Form Sections

### 1. Lecturer Information
Records lecturer's personal and professional details:
- Session and Semester
- Full name and appointment details
- School and Department
- Position/Rank and contact information
- Salary grade level
- Teaching credit units and leave information

### 2. Teaching
Tracks course assignments:
- Course code and title
- Venue and schedule
- Credit units
- Student enrollment

### 3. Administrative Duties
Documents administrative responsibilities with activity types

### 4. Funded Research & Consultancy
Records research projects:
- Project number and title
- Funding details
- Release time requirements
- Total amount and remarks

### 5. Community Service
Tracks community engagement:
- Service type and beneficiaries
- Community impact
- Date of activity

### 6. Certification
Captures approval signatures:
- Lecturer's signature
- Head of Department (HOD) signature
- Dean's signature

## Data Storage

### Local Storage
Form data is automatically saved to your browser's localStorage when you click "Save". The data includes:
- All lecturer information
- Teaching assignments
- Administrative duties
- Research projects
- Community service records
- Certification signatures

### Exporting Data
The form data is stored as JSON in localStorage under the key `aorFormData`. You can access it programmatically or export it for backup.

## Browser Compatibility

| Browser | Status |
|---------|--------|
| Chrome | ✅ Supported |
| Firefox | ✅ Supported |
| Safari | ✅ Supported |
| Edge | ✅ Supported |
| IE 11 | ⚠️ Partial Support |

## Customization

### Color Scheme
The primary color (purple #7b2cbf) can be customized in `styles.css`:
```css
/* Change all instances of #7b2cbf to your desired color */
```

### Adding New Sections
To add a new section:
1. Add HTML structure in `index.html`
2. Add corresponding CSS in `styles.css`
3. Add JavaScript functions in `script.js`

### Form Fields
To add new fields:
1. Add input elements with appropriate `name` and `id` attributes
2. Ensure form control names match JavaScript data collection logic
3. Update form submission handler in `script.js`

## API & Functions

### JavaScript Functions

#### addTeachingRow()
Adds a new row to the teaching table

#### addDutyRow()
Adds a new row to the administrative duties table

#### addProjectRow()
Adds a new row to the research projects table

#### addServiceRow()
Adds a new row to the community service table

#### deleteRow(rowId)
Removes a specific row from any table

#### previewSummary()
Opens a new window displaying form summary

#### handleFormSubmit(e)
Collects and saves all form data

#### loadFormData()
Loads previously saved form data from localStorage

## Troubleshooting

### Form data not saving
- Check if localStorage is enabled in your browser
- Try clearing browser cache and reloading
- Check browser console for JavaScript errors

### Styling issues
- Ensure `styles.css` is in the same directory as `index.html`
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Try a different browser

### Rows not appearing
- Ensure JavaScript is enabled in your browser
- Check browser console for errors
- Verify `script.js` is loading properly

## Performance

- Lightweight: No external dependencies or frameworks
- Fast loading: Simple HTML/CSS/JS files
- Responsive: Optimized for all screen sizes
- Offline capable: Works without internet connection

## Security Notes

⚠️ **Important**: This form stores data in browser localStorage, which is not encrypted. 

**Recommendations**:
- Do not store sensitive information beyond what's shown
- Consider implementing server-side validation before submission
- Use HTTPS when deploying on a web server
- Implement proper authentication for production use

## License

This project is developed for Federal University of Technology, Minna.

## Support & Contributions

For issues, suggestions, or contributions, please contact the development team or submit through the university's IT department.

## Version History

### v1.0 (Initial Release)
- Complete AOR form implementation
- All required sections and fields
- Data persistence functionality
- Preview and print features
- Responsive design

---

**Last Updated**: November 2025

**Developed for**: Federal University of Technology, Minna
