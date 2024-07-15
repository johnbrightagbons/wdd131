document.getElementById("currentyear").textContent = new Date().getFullYear();
        document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


        document.addEventListener('DOMContentLoaded', function() {
            const products = [
                { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
                { id: "fc-2050", name: "power laces", averagerating: 4.7 },
                { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
                { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
                { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
            ];
        
            const productSelect = document.getElementById('products');
        
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.name;
                option.textContent = product.name;
                productSelect.appendChild(option);
            });
        
            document.getElementById("currentyear").textContent = new Date().getFullYear();
            document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
        
            // Increment review counter in localStorage
            if (localStorage.getItem('reviewCount')) {
                let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10);
                reviewCount++;
                localStorage.setItem('reviewCount', reviewCount);
            } else {
                localStorage.setItem('reviewCount', 1);
            }
            
            // Display review counter
            const reviewCounterDiv = document.createElement('div');
            reviewCounterDiv.textContent = `You have completed ${localStorage.getItem('reviewCount')} reviews.`;
            document.body.appendChild(reviewCounterDiv);
        });
        