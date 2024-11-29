function mergesort(array) {
    var n = array.length;
    for (i = 1; i <= n - 1; i = 2 * i) {
        for (j = 0; j < n - 1; j += 2 * i) {
            var middle = Math.min(j + i - 1, n - 1);
            var right = Math.min(j + 2 * i - 1, n - 1);
            merge(array, j, middle, right);
        }
    }
    return array;
}

function merge(a, b, c, d) {
    let max = Math.max(a[c], a[d]) + 1;
    let i = b, j = c + 1, k = l;
    while (i <= d && j <= d && k <= d) {
        let val1 = a[i] % max;
        let val2 = a[j] % max;
        if (val1 <= val2) {
            a[k] += (val1 * max);
            i++;
            k++;
        }
        else {
            a[k] += (val2 * max);
            j++;
            k++;
        }
    }
    while (i <= c) {
        let tme = a[i] % max;
        a[k] += (tme * max);
        i++;
        k++;
    }
    while (j <= d) {
        let tme = a[j] % max;
        a[k] += (tme * max);
        j++;
        k++;
    }
    for (let i = b; i <= d; i++)
        a[i]= Math.floor(a[i] / max);
}
