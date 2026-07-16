import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  FaSlidersH,
  FaThLarge,
  FaList,
  FaBook,
  FaBullhorn,
  FaUsers,
  FaImages,
  FaQuestionCircle,
  FaBookOpen,
  FaCogs,
  FaPuzzlePiece,
  FaEnvelope,
  FaTrash,
  FaEdit,
  FaPlus,
  FaSearch,
  FaChartPie,
  FaArrowLeft,
  FaSignOutAlt,
  FaUserShield,
  FaTimes,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";
import "./AdminDashboard.css";

const API_BASE_URL = "http://localhost:5000/api/admin";


const TABLE_CONFIGS = {
  sliders: {
    title: "Sliders",
    icon: <FaSlidersH />,
    fields: [
      { name: "image", label: "Image URL", type: "text", required: true, isUrl: true },
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea" },
      { name: "button_text", label: "Button Text", type: "text" },
      { name: "status", label: "Active Status", type: "checkbox", defaultValue: 1 }
    ]
  },
  sections: {
    title: "Sections",
    icon: <FaThLarge />,
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea" },
      { name: "image", label: "Image URL", type: "text", isUrl: true }
    ]
  },
  features: {
    title: "Features",
    icon: <FaList />,
    fields: [
      { name: "icon", label: "Icon Name (e.g. lnr-cog)", type: "text", required: true },
      { name: "title", label: "Title", type: "text", required: true },
      { name: "description", label: "Description", type: "textarea" },
      { name: "more_link", label: "More Link URL", type: "text" }
    ]
  },
  courses: {
    title: "Home Courses",
    icon: <FaBook />,
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "category", label: "Category", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "image", label: "Image URL", type: "text", isUrl: true },
      { name: "button_text", label: "Button Text", type: "text" },
      { name: "course_link", label: "Course Link URL", type: "text" }
    ]
  },
  announcements: {
    title: "Announcements",
    icon: <FaBullhorn />,
    fields: [
      { name: "image", label: "Image URL", type: "text", isUrl: true },
      { name: "title", label: "Title", type: "text", required: true },
      { name: "author", label: "Author Name", type: "text", defaultValue: "Admin User" },
      { name: "post_date", label: "Post Date / Time Text", type: "text" },
      { name: "heading", label: "Heading Line", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "button_text", label: "Button Text", type: "text", defaultValue: "More..." }
    ]
  },
  team_members: {
    title: "Team Members",
    icon: <FaUsers />,
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      { name: "designation", label: "Designation", type: "text" },
      { name: "description", label: "Introduction Description", type: "textarea" },
      { name: "image", label: "Image URL", type: "text", isUrl: true },
      { name: "facebook", label: "Facebook Link", type: "text" },
      { name: "instagram", label: "Instagram Link", type: "text" },
      { name: "twitter", label: "Twitter Link", type: "text" },
      { name: "status", label: "Active Status", type: "checkbox", defaultValue: 1 }
    ]
  },
  image_gallery: {
    title: "Image Gallery",
    icon: <FaImages />,
    fields: [
      { name: "image_url", label: "Image URL", type: "text", required: true, isUrl: true },
      { name: "title", label: "Image Title", type: "text" },
      { name: "status", label: "Active Status", type: "checkbox", defaultValue: 1 }
    ]
  },
  faqs: {
    title: "FAQs",
    icon: <FaQuestionCircle />,
    fields: [
      { name: "question", label: "Question Text", type: "text", required: true },
      { name: "answer", label: "Answer Content", type: "textarea", required: true }
    ]
  },
  allcourses: {
    title: "All Courses",
    icon: <FaBookOpen />,
    fields: [
      { name: "course_name", label: "Course Name", type: "text", required: true },
      { name: "category", label: "Category", type: "text" },
      { name: "description", label: "Course Description", type: "textarea" },
      { name: "image", label: "Cover Image URL", type: "text", isUrl: true }
    ]
  },
  theme_core_features: {
    title: "Theme Core Features",
    icon: <FaCogs />,
    fields: [
      { name: "title", label: "Feature Title", type: "text", required: true },
      { name: "description", label: "Feature Description", type: "textarea" },
      { name: "status", label: "Active Status", type: "checkbox", defaultValue: 1 }
    ]
  },
  built_in_components: {
    title: "Built-In Components",
    icon: <FaPuzzlePiece />,
    fields: [
      { name: "image", label: "Image URL", type: "text", isUrl: true },
      { name: "title", label: "Component Title", type: "text", required: true },
      { name: "category", label: "Category", type: "text" },
      { name: "description", label: "Description Details", type: "textarea" },
      { name: "button_text", label: "Button Text", type: "text" }
    ]
  },
  contacts: {
    title: "Contact Submissions",
    icon: <FaEnvelope />,
    readOnly: true,
    fields: [
      { name: "name", label: "Sender Name", type: "text" },
      { name: "email", label: "Sender Email", type: "text" },
      { name: "subject", label: "Subject", type: "text" },
      { name: "message", label: "Message Body", type: "textarea" },
      { name: "created_at", label: "Received At", type: "text" }
    ]
  },
  users: {
    title: "Registered Users",
    icon: <FaUsers />,
    readOnly: true,
    fields: [
      { name: "username", label: "Username", type: "text" },
      { name: "email", label: "Email Address", type: "text" },
      { name: "created_at", label: "Joined Date", type: "text" }
    ]
  }
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  

  const [stats, setStats] = useState({
    allcourses: 0,
    contacts: 0,
    team_members: 0,
    sliders: 0,
    users: 0
  });

  
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({});

 
  const [itemToDelete, setItemToDelete] = useState(null);

  
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 4000);
  };


  useEffect(() => {
    const savedUser = localStorage.getItem("lambdaUser");
    if (savedUser) {
      try {
        const userObj = JSON.parse(savedUser);
        if (userObj.username === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
  }, []);

  
  useEffect(() => {
    if (!isAdmin) return;
    const fetchStats = async () => {
      const headers = { "x-admin-username": "admin" };
      try {
        const resSliders = await axios.get(`${API_BASE_URL}/sliders`, { headers }).catch(() => ({ data: [] }));
        const resCourses = await axios.get(`${API_BASE_URL}/allcourses`, { headers }).catch(() => ({ data: [] }));
        const resContacts = await axios.get(`${API_BASE_URL}/contacts`, { headers }).catch(() => ({ data: [] }));
        const resTeam = await axios.get(`${API_BASE_URL}/team_members`, { headers }).catch(() => ({ data: [] }));
        const resUsers = await axios.get(`${API_BASE_URL}/users`, { headers }).catch(() => ({ data: [] }));
        
        setStats({
          sliders: resSliders.data?.length || 0,
          allcourses: resCourses.data?.length || 0,
          contacts: resContacts.data?.length || 0,
          team_members: resTeam.data?.length || 0,
          users: resUsers.data?.length || 0
        });
      } catch (err) {
        console.error("Error loading statistics", err);
      }
    };
    fetchStats();
  }, [isAdmin, activeTab]);

 
  useEffect(() => {
    if (!isAdmin || activeTab === "dashboard") return;
    
    const fetchItems = async () => {
      setLoading(true);
      setSearchTerm("");
      try {
        const res = await axios.get(`${API_BASE_URL}/${activeTab}`, {
          headers: { "x-admin-username": "admin" }
        });
        setItems(res.data || []);
      } catch (err) {
        console.error(`Error loading table ${activeTab}`, err);
        showToast(`Failed to load data for ${activeTab}`, "error");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [activeTab, isAdmin]);

 
  const handleLogout = () => {
    localStorage.removeItem("lambdaUser");
    navigate("/");
  };

  
  const handleAddClick = (tab = activeTab) => {
    const config = TABLE_CONFIGS[tab];
    if (!config) return;
    const initialData = {};
    config.fields.forEach(f => {
      initialData[f.name] = f.defaultValue !== undefined ? f.defaultValue : (f.type === "checkbox" ? 0 : "");
    });
    setFormData(initialData);
    setEditingItem(null);
    setShowFormModal(true);
  };


  const handleEditClick = (item, tab = activeTab) => {
    setEditingItem(item);
    const config = TABLE_CONFIGS[tab];
    if (!config) return;
    const initialData = {};
    config.fields.forEach(f => {
      initialData[f.name] = item[f.name] !== undefined && item[f.name] !== null ? item[f.name] : "";
    });
    setFormData(initialData);
    setShowFormModal(true);
  };

  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const headers = { "x-admin-username": "admin" };
    
  
    const payload = { ...formData };
    
    try {
      if (editingItem) {
        
        await axios.put(`${API_BASE_URL}/${activeTab}/${editingItem.id}`, payload, { headers });
        showToast("Record updated successfully!");
      } else {
        
        await axios.post(`${API_BASE_URL}/${activeTab}`, payload, { headers });
        showToast("Record created successfully!");
      }
      
    
      const res = await axios.get(`${API_BASE_URL}/${activeTab}`, { headers });
      setItems(res.data || []);
      setShowFormModal(false);
    } catch (err) {
      console.error(err);
      showToast(err.response?.data?.message || "Error saving record", "error");
    }
  };


  const handleDeleteClick = (item) => {
    setItemToDelete(item);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;
    const headers = { "x-admin-username": "admin" };
    try {
      await axios.delete(`${API_BASE_URL}/${activeTab}/${itemToDelete.id}`, { headers });
      showToast("Record deleted successfully!");
      setItems(items.filter(item => item.id !== itemToDelete.id));
      setItemToDelete(null);
    
      if (stats[activeTab] !== undefined) {
        setStats(prev => ({ ...prev, [activeTab]: Math.max(0, prev[activeTab] - 1) }));
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to delete record", "error");
    }
  };

  const handleInputChange = (fieldName, val) => {
    setFormData({
      ...formData,
      [fieldName]: val
    });
  };

  if (!isAdmin) {
    return (
      <div className="admin-access-denied">
        <div className="denied-box">
          <FaUserShield className="denied-icon" />
          <h1>Access Denied</h1>
          <p>You must be signed in as the administrator to access the admin panel.</p>
          <div className="denied-actions">
            <Link to="/login" className="denied-btn primary">Go to Login</Link>
            <Link to="/" className="denied-btn secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  
  const filteredItems = items.filter(item => {
    if (!searchTerm) return true;
    const query = searchTerm.toLowerCase();
    return Object.values(item).some(val => {
      if (val === null || val === undefined) return false;
      return String(val).toLowerCase().includes(query);
    });
  });

  return (
    <div className="admin-layout">
      {/* Toast alert */}
      {toast.show && (
        <div className={`admin-toast ${toast.type}`}>
          {toast.type === "success" ? <FaCheckCircle /> : <FaExclamationCircle />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <img
            src="https://lambda-demo-01.redpithemes.com/pluginfile.php/1/core_admin/logo/0x200/1758302184/logo-site-01.png"
            alt="Lambda Logo"
          />
          <span className="badge">Control Center</span>
        </div>

        <nav className="sidebar-menu">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
          >
            <FaChartPie className="item-icon" />
            <span>Dashboard Home</span>
          </button>
          
          <div className="menu-section-header">CONTENT MANAGERS</div>
          
          {Object.keys(TABLE_CONFIGS).map(key => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`menu-item ${activeTab === key ? "active" : ""}`}
            >
              <span className="item-icon">{TABLE_CONFIGS[key].icon}</span>
              <span>{TABLE_CONFIGS[key].title}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="avatar">AD</div>
            <div className="user-details">
              <h4>System Admin</h4>
              <p>admin@lambda.com</p>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn" title="Sign Out">
            <FaSignOutAlt />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Panel Content Area */}
      <main className="admin-content">
        <header className="content-header">
          <div className="header-info">
            <h1>{activeTab === "dashboard" ? "Dashboard Overview" : TABLE_CONFIGS[activeTab].title}</h1>
            <p>Control e-learning configurations, page data, and site blocks.</p>
          </div>
          <div className="header-controls">
            <Link to="/" className="view-site-link">
              <FaArrowLeft /> View Site
            </Link>
          </div>
        </header>

        {activeTab === "dashboard" ? (
      
          <div className="dashboard-view">
            <div className="stats-grid">
              <div className="stat-card violet" onClick={() => setActiveTab("allcourses")}>
                <div className="card-icon"><FaBookOpen /></div>
                <div className="card-data">
                  <h3>{stats.allcourses}</h3>
                  <p>Total Courses</p>
                </div>
              </div>
              <div className="stat-card blue" onClick={() => setActiveTab("contacts")}>
                <div className="card-icon"><FaEnvelope /></div>
                <div className="card-data">
                  <h3>{stats.contacts}</h3>
                  <p>Contact Messages</p>
                </div>
              </div>
              <div className="stat-card green" onClick={() => setActiveTab("team_members")}>
                <div className="card-icon"><FaUsers /></div>
                <div className="card-data">
                  <h3>{stats.team_members}</h3>
                  <p>Active Staff</p>
                </div>
              </div>
              <div className="stat-card amber" onClick={() => setActiveTab("sliders")}>
                <div className="card-icon"><FaSlidersH /></div>
                <div className="card-data">
                  <h3>{stats.sliders}</h3>
                  <p>Hero Slides</p>
                </div>
              </div>
              <div className="stat-card red" onClick={() => setActiveTab("users")}>
                <div className="card-icon"><FaUserShield /></div>
                <div className="card-data">
                  <h3>{stats.users}</h3>
                  <p>Registered Users</p>
                </div>
              </div>
            </div>

            <div className="dashboard-info-section">
              <div className="info-block">
                <h2>Welcome back, Administrator</h2>
                <p>
                  This system gives you full authorization over the content displayed on the Moodle-style e-learning platform.
                  Select any category on the sidebar menu to create, review, update, or remove entries from the database.
                </p>
                <div className="quick-actions">
                  <h3>Quick Actions</h3>
                  <div className="action-buttons">
                    <button onClick={() => { setActiveTab("sliders"); handleAddClick("sliders"); }} className="action-btn">
                      <FaPlus /> Add Slide
                    </button>
                    <button onClick={() => { setActiveTab("allcourses"); handleAddClick("allcourses"); }} className="action-btn">
                      <FaPlus /> Add Course
                    </button>
                    <button onClick={() => { setActiveTab("faqs"); handleAddClick("faqs"); }} className="action-btn">
                      <FaPlus /> Add FAQ
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
        
          <div className="table-view-section">
            <div className="table-controls">
              <div className="search-bar">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder={`Search ${TABLE_CONFIGS[activeTab].title}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {!TABLE_CONFIGS[activeTab].readOnly && (
                <button onClick={handleAddClick} className="btn-add">
                  <FaPlus /> Add {TABLE_CONFIGS[activeTab].title.slice(0, -1)}
                </button>
              )}
            </div>

            {loading ? (
              <div className="loader-container">
                <div className="spinner"></div>
                <p>Loading database records...</p>
              </div>
            ) : filteredItems.length === 0 ? (
              <div className="empty-state">
                <p>No records found. Try modifying your search or click add to create a new item.</p>
              </div>
            ) : (
              <div className="table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th className="id-col">ID</th>
                      {TABLE_CONFIGS[activeTab].fields.map(f => (
                        <th key={f.name}>{f.label}</th>
                      ))}
                      <th className="actions-col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredItems.map(item => (
                      <tr key={item.id}>
                        <td className="id-cell">{item.id}</td>
                        {TABLE_CONFIGS[activeTab].fields.map(f => {
                          const val = item[f.name];
                         
                          if (f.isUrl && val) {
                            return (
                              <td key={f.name} className="image-cell">
                                <div className="table-thumb">
                                  <img src={val} alt="Preview" onError={(e) => e.target.style.display = 'none'} />
                                  <span className="url-text" title={val}>{val.substring(0, 30)}...</span>
                                </div>
                              </td>
                            );
                          }
                          
                         
                          if (f.type === "checkbox") {
                            return (
                              <td key={f.name}>
                                <span className={`status-badge ${val ? "active" : "inactive"}`}>
                                  {val ? "Active" : "Inactive"}
                                </span>
                              </td>
                            );
                          }

                          return (
                            <td key={f.name} className="text-cell" title={val}>
                              {val !== null && val !== undefined ? String(val) : "-"}
                            </td>
                          );
                        })}
                        <td className="actions-cell">
                          <div className="action-row">
                            {!TABLE_CONFIGS[activeTab].readOnly && (
                              <button onClick={() => handleEditClick(item)} className="action-btn edit" title="Edit">
                                <FaEdit />
                              </button>
                            )}
                            <button onClick={() => handleDeleteClick(item)} className="action-btn delete" title="Delete">
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modal - Create/Edit Form */}
      {showFormModal && (
        <div className="modal-backdrop" onClick={() => setShowFormModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingItem ? "Edit Record" : `Add New ${TABLE_CONFIGS[activeTab].title.slice(0, -1)}`}</h2>
              <button onClick={() => setShowFormModal(false)} className="close-btn"><FaTimes /></button>
            </div>
            
            <form onSubmit={handleFormSubmit} className="modal-form">
              <div className="form-fields-container">
                {TABLE_CONFIGS[activeTab].fields.map(f => (
                  <div key={f.name} className="form-group">
                    <label>{f.label} {f.required && <span className="req">*</span>}</label>
                    
                    {f.type === "textarea" ? (
                      <textarea
                        value={formData[f.name]}
                        onChange={(e) => handleInputChange(f.name, e.target.value)}
                        required={f.required}
                        rows={4}
                      />
                    ) : f.type === "checkbox" ? (
                      <div className="toggle-wrapper">
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={!!formData[f.name]}
                            onChange={(e) => handleInputChange(f.name, e.target.checked ? 1 : 0)}
                          />
                          <span className="slider round"></span>
                        </label>
                        <span className="toggle-label">{formData[f.name] ? "Enabled" : "Disabled"}</span>
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={formData[f.name]}
                        onChange={(e) => handleInputChange(f.name, e.target.value)}
                        required={f.required}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" onClick={() => setShowFormModal(false)} className="btn-cancel">Cancel</button>
                <button type="submit" className="btn-save">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal - Delete Confirmation */}
      {itemToDelete && (
        <div className="modal-backdrop" onClick={() => setItemToDelete(null)}>
          <div className="modal-content small" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header danger">
              <h2>Confirm Deletion</h2>
              <button onClick={() => setItemToDelete(null)} className="close-btn"><FaTimes /></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to permanently delete this record from <strong>{TABLE_CONFIGS[activeTab].title}</strong>?</p>
              <p className="warn-text">This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button onClick={() => setItemToDelete(null)} className="btn-cancel">No, Keep It</button>
              <button onClick={confirmDelete} className="btn-delete-confirm">Yes, Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
