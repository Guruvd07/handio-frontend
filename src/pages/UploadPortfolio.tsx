import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import styles from "./UploadPortfolio.module.css";
import {
  ImagePlus,
  AlertTriangle,
  CheckCircle,
  Upload,
  Trash2,
  ImageOff
} from "lucide-react";

function UploadPortfolio() {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [caption, setCaption] = useState("");
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* ── Fetch ── */
  const fetchPortfolio = async () => {
    try {
      const res = await api.get("/providers/portfolio", {
        headers: { "Cache-Control": "no-cache" }
      });
      setPortfolio(res.data);
    } catch (err) {
      console.error("Portfolio load failed:", err);
    }
  };

  useEffect(() => { fetchPortfolio(); }, []);

  /* ── File change ── */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setError("");

    if (!selectedFile) { setFile(null); setPreview(null); return; }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB"); return;
    }
    if (!selectedFile.type.startsWith("image/")) {
      setError("Please select a valid image file"); return;
    }

    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(selectedFile);
  };

  /* ── Upload ── */
  const handleUpload = async () => {
    if (loading) return;
    if (!file) { setError("Please select an image first"); return; }

    setError(""); setSuccess("");
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      formData.append("caption", caption);
      await api.post("/providers/portfolio", formData);
      await fetchPortfolio();
      setFile(null); setPreview(null); setCaption("");
      setSuccess("Image uploaded successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (err: any) {
      setError(err.response?.data?.error || "Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearUpload = () => {
    setFile(null); setPreview(null); setCaption(""); setError("");
  };

  /* ── Delete ── */
  const handleDelete = async (imageId: string) => {
    if (!window.confirm("Delete this portfolio image?")) return;
    try {
      await api.delete(`/providers/portfolio/${imageId}`);
      setPortfolio(prev => prev.filter(item => item._id !== imageId));
    } catch (err: any) {
      alert(err.response?.data?.error || "Delete failed");
    }
  };

  return (
    <div className={styles.upPage}>

      {/* ── Sticky header ── */}
      <div className={styles.upHeader}> <br /> <br />
        {/* <button
          className={styles.upBackBtn} 
          onClick={() => navigate("/dashboard")}  
        >
          ← Back
        </button> */}
        {/* <h1 className={styles.upHeaderTitle}>Manage Portfolio</h1> */}
      </div> <br />

      <div className={styles.upContent}>

        {/* ── Upload card ── */}
        <div className={styles.upUploadCard}>
          <div className={styles.upCardHeader}>
            <h2 className={styles.upCardTitle}>Add Portfolio Image</h2>
            <p className={styles.upCardSubtitle}>Showcase your best work with high-quality images</p>
          </div>

          {/* Drop zone */}
          <div className={styles.upDropZone}>
            <input
              type="file"
              id="up-file-input"
              accept="image/*"
              onChange={handleFileChange}
              className={styles.upFileInput}
            />
            <label htmlFor="up-file-input" className={styles.upFileLabel}>
              <ImagePlus size={40} style={{ opacity: 0.6 }} />
              <p className={styles.upDropText}>Click to upload or drag & drop</p>
              <p className={styles.upDropHint}>PNG, JPG, GIF · max 5 MB</p>
            </label>
          </div>

          {/* Preview */}
          {preview && (
            <div className={styles.upPreviewWrap}>
              <div className={styles.upPreviewBox}>
                <img src={preview} alt="Preview" className={styles.upPreviewImg} />
                <button
                  className={styles.upRemoveBtn}
                  onClick={clearUpload}
                  type="button"
                  title="Remove"
                >
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</span>
                </button>
              </div>
            </div>
          )}

          {/* Alerts */}
          {error   && <div className={`${styles.upAlert} ${styles.upAlertError}`}><AlertTriangle size={14} style={{ flexShrink: 0 }} /> {error}</div>}
          {success && <div className={`${styles.upAlert} ${styles.upAlertSuccess}`}><CheckCircle size={14} style={{ flexShrink: 0 }} /> {success}</div>}

          {/* Caption */}
          <div className={styles.upCaptionGroup}>
            <label className={styles.upCaptionLabel} htmlFor="up-caption">
              Caption <span className={styles.upOptional}>(optional)</span>
            </label>
            <textarea
              id="up-caption"
              className={styles.upCaptionInput}
              placeholder="Describe this portfolio image…"
              value={caption}
              onChange={e => setCaption(e.target.value)}
              maxLength={200}
              rows={3}
            />
            <span className={styles.upCharCount}>{caption.length}/200</span>
          </div>

          {/* Actions */}
          <div className={styles.upActions}>
            <button
              className={styles.upUploadBtn}
              onClick={handleUpload}
              disabled={loading || !file}
            >
              {loading ? (
                <span className={styles.upBtnLoading}>
                  <span className={styles.upBtnSpinner} /> Uploading…
                </span>
              ) : (
                <>
                  <Upload size={15} /> Upload Image
                </>
              )}
            </button>
            {file && (
              <button
                className={styles.upCancelBtn}
                onClick={clearUpload}
                type="button"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* ── Portfolio grid ── */}
        <div className={styles.upPortfolioSection}>
          <h2 className={styles.upSectionTitle}>
            Your Portfolio
            <span className={styles.upCount}>{portfolio.length}</span>
          </h2>

          {portfolio.length === 0 ? (
            <div className={styles.upEmpty}>
              <ImageOff size={48} style={{ opacity: 0.4, marginBottom: '4px' }} />
              <h3>No portfolio images yet</h3>
              <p>Upload your first image to showcase your work</p>
            </div>
          ) : (
            <div className={styles.upGrid}>
              {portfolio.map(item => (
                <div key={item._id} className={styles.upPortfolioCard}>

                  <div className={styles.upImgBox}>
                    <img
                      src={item.imageUrl}
                      alt={item.caption || "portfolio"}
                      className={styles.upPortfolioImg}
                    />
                  </div>

                  {item.caption && (
                    <div className={styles.upCardCaption}>
                      <p>{item.caption}</p>
                    </div>
                  )}

                  <button
                    className={styles.upDeleteBtn}
                    onClick={() => handleDelete(item._id)}
                    title="Delete this image"
                  >
                    <Trash2 size={13} style={{ display: 'inline-block', marginRight: '4px' }} /> Delete
                  </button>

                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default UploadPortfolio;
  